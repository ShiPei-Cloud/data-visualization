<template>
  <div id="myChart3" :style="{width: '600px', height: '280px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "YuEItem",
  data() {
    return {
      area: [],
      number: []
    };
  },
  props: {
    LoanBalance: {
      type: Array,
      default: []
    }
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    drawLine() {
      this.area=[];
      this.number=[];
      this.LoanBalance.forEach((item, index) => {
        if (item.bank == null) {
          this.area.push(item.area.replace(/(^\s*)|(\s*$)/g, ""));
        } else {
          this.area.push(item.bank);
        }
        this.number.push(Number(item.loan));
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart3 = echarts.init(document.getElementById("myChart3"));
      // 绘制图表
      myChart3.setOption({
        xAxis: {
          type: "category",
          data: this.area,
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
            data: this.number,
            type: "line",
            symbol: "circle", //设定为实心点  类型 ： 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
            symbolSize: 6, //圆点大小
            itemStyle: {
              normal: {
                color: "#00FF00", //圆点颜色
                borderColor: "#00FF00",
                // borderWidth: 8,

                lineStyle: {
                  //折线颜色大小
                  type: "solid", //'dotted'虚线 'solid'实线
                  color: "#00FF00",
                  width: 1
                  //   borderColor: "#faa12f" //拐点边框颜色
                }
              }
            },
            // areaStyle: {}
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "RGBA(0, 255, 0, 0.8)"
                },
                {
                  offset: 1,
                  color: "RGBA(0, 255, 0, 0.01)"
                }
              ])
            }
          }
        ]
      });
    }
  },
  watch: {
    LoanBalance(newVal, oldVal) {
      this.LoanBalance = newVal;
      this.drawLine();
    }
  }
};
</script>
<style scoped>
#myChart3 {
  position: absolute;
  top: 4px;
  left: 14px;
}
</style>
