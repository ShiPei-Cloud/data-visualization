<template>
  <div id="myChart2" :style="{width: '400px', height: '250px'}"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "ZengSuItem",
  data() {
    return {
      indicator: [],
      number: []
    };
  },
  props: {
    GrowthRate: {
      type: Array,
      default: []
    }
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    drawLine() {
      this.number = [];
      this.indicator = [];
      this.GrowthRate.forEach((item, index) => {
        if (item.bank == null) {
          this.indicator.push({
            name: item.area,
            max: Number(item.growth) + 1
          });
        } else {
          this.indicator.push({
            name: item.bank,
            max: Number(item.growth) + 1
          });
        }
        this.number.push(Number(item.growth));
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart2 = echarts.init(document.getElementById("myChart2"));
      // 绘制图表
      myChart2.setOption({
        title: {
          text: ""
        },
        tooltip: {
          position: "bottom",
          backgroundColor: "RGBA(0, 13, 46, 1)",
          padding: [
            5, // 上
            0, // 右
            5, // 下
            10 // 左
          ],
          textStyle: {
            color: "rgba(0, 169, 255, 1)"
          },
          formatter: function(params) {
            // 鼠标移动，显示数据
            // return params[0].name + ": " + params[0].value;
          }
        },
        legend: {
          //   data: ["预算分配（Allocated Budget）", "实际开销（Actual Spending）"]
          show: false
        },
        radar: {
          shape: "circle",
          name: {
            textStyle: {
              color: "#00A9FF",
              //   backgroundColor: "#999",
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: this.indicator,
          splitLine: {
            lineStyle: {
              color: ["#00A9FF"],
              type: "dashed"
            }
          },
          splitArea: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "00A9FF",
              type: "dashed"
            }
          }
        },
        //  backgroundColor: '#2c343c',

        series: [
          {
            type: "radar",
            data: [
              {
                value: this.number,
                name: "增速 Growth Rate"
              }
            ],
            areaStyle: {
              color: "#808615"
              //     shadowColor: "blue" ,// 圆颜色
              //   //      shadowBlur: 10
            },
            emphasis: {
              label: {
                show: false,

                textStyle: {
                  //图例文字的样式
                  color: "rgba(0, 169, 255, 1)", //文字颜色
                  fontSize: "12px" //文字大小
                }
              }
            },
            lineStyle: {
              color: "#808615",
              width: 1
            },
            itemStyle: {
              opacity: 1,
              normal: {
                //这里是重点
                color: "#808615",
                borderWidth: 1
              }
            },
            symbol: "circle",
            symbolSize: 6 //圆点大小
          }
        ]
      });
    }
  },
  watch: {
    GrowthRate(newVal, oldVal) {
      this.GrowthRate = newVal;
      this.drawLine();
    }
  }
};
</script>
<style scoped>
#myChart2 {
  position: absolute;
  top: 40px;
  left: -20px;
}
</style>
