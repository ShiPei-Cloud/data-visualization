<template>
  <div id="myChart0" :style="{width: '700px', height: '270px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "EachersZheXianTu",
  data() {
    return {
      xAxis: [],
      number: []
    };
  },
  props: {
    AnnualCumulativeTurnover: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      this.xAxis = [];
      this.number = [];
      this.AnnualCumulativeTurnover.forEach((item, index) => {
        if (item.bank == null) {
          this.xAxis.push(item.area);
          this.number.push(item.transaction);
        } else {
          this.xAxis.push(item.bank);
          this.number.push(item.transaction);
        }
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart0"));
      // 绘制图表
      myChart.setOption({
        // title: { text: "在Vue中使用echarts", textStyle: { color: "#00FFFF" } },
        tooltip: {},
        //  backgroundColor: '#12cf96',
        xAxis: {
          data: this.xAxis,

          axisLine: {
            lineStyle: {
              color: "#05BCF0"
            }
          },
          axisLabel: {
            interval: 0,
            formatter: function(value) {
              return value.split("").join("\n");
            }
          }
          //   splitLine: {
          //     // show: true,
          //     lineStyle: {
          //       color: ["#04BDFF"],
          //       type:'dashed'
          //     }
          //   }
        },

        yAxis: {
          axisLine: {
            lineStyle: {
              color: "#05BCF0"
            }
          },
          splitLine: {
            // show: true,
            lineStyle: {
              color: ["#04BDFF"],
              type: "dashed"
            }
          }
        },
        series: [
          {
            name: "销量",
            type: "bar",

            data: this.number,
            barWidth: 10,
            itemStyle: {
              normal: {
                // color: "linear-gradient(0deg, #0080FF 0%, #05BEF0 100%)",
                color: "#05B8F2"
              }
            }
          }
        ]
      });
    }
  },
  watch: {
    AnnualCumulativeTurnover(newVal, oldVal) {
      this.AnnualCumulativeTurnover = newVal;
      this.drawLine();
    }
  }
};
</script>
<style scoped>
#myChart0 {
  position: absolute;
  top: 30px;
  left: -20px;
}
</style>
