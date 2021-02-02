<template>
  <div id="myChart4" :style="{width: '600px', height: '250px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "ZengSuItem",
  data() {
    return {
      getData: []
    };
  },
  mounted() {
    // this.drawLine();
  },
  props: {
    TotalDialing1: { type: Array, default: [] }
  },
  methods: {
    drawLine() {
      this.getData = [];
      this.TotalDialing1.forEach(item => {
        if (item.bank == null) {
           this.getData.push({
            value: item.callNum,
            name: item.area
          });
        } else {
          this.getData.push({
            value: item.callNum,
            name: item.bank
          });
        }
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart4 = echarts.init(document.getElementById("myChart4"));
      // 绘制图表
      myChart4.setOption({
        legend: {
          // top: "bottom",
          orient: "vertical",
          x: "left", //可设定图例在左、右、居中
          y: "center", //可设定图例在上、下、居中
          padding: [60, 50, 0, 0],

          textStyle: {
            //图例文字的样式
            color: "rgba(0, 169, 255, 1)", //文字颜色
            fontSize: "12px", //文字大小
            borderRadius: "50%"
          }
        },
        color: [
          "#3884FC",
          "#FFB769",
          "#F9E264",
          "#FFB769",
          "#F5626E",
          "#FBA998",
          "#BB60B1",
          "#AF87FE",
          "#B034E9",
          "#4F17CD",
          "#171CCD",
          "#023A92",
          "#0F86B7",
          "#049CB1",
          "#26CCD8",
          "#9DDDFA"
        ], //手动设置每个图例的颜色

        toolbox: {
          //   show: true,
          //   feature: {
          //     mark: { show: true },
          //     dataView: { show: true, readOnly: false },
          //     restore: { show: true },
          //     saveAsImage: { show: true }
          //   }
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: [40, 80],
            center: ["55%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true,
                textStyle: {
                  //图例文字的样式
                  color: "rgba(0, 169, 255, 1)", //文字颜色
                  fontSize: "12px" //文字大小
                }
              }
            },

            data: this.getData
          
          }
        ]
      });
    }
  },
  watch: {
    TotalDialing1(newVal, oldVal) {
      this.TotalDialing1 = newVal;
      // 数据变化之后，重新绘制图标数据
      newVal && this.drawLine();
    }
  }
};
</script>
<style scoped>
#myChart4 {
  position: absolute;
  top: 25px;
  left: 60px;
}
</style>
