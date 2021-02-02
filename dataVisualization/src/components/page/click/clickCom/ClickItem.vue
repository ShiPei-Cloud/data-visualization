<template>
  <div id="myChart1" :style="{width: '700px', height: '250px'}"></div>
</template>
<script>
import echarts from "echarts";

export default {
  name: "ClickItem",
  data() {
    return {
      number: [],
      getData: []
    };
  },
  props: {
    ClickSuccessRate1: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      this.number = [];
      this.ClickSuccessRate1.forEach(item => {
        this.number.push(Number(item.surate).toFixed(2));
      });

      this.getData = [];
      this.ClickSuccessRate1.forEach(item => {
        if (item.bank == null) {
          this.getData.push(item.area);
        } else {
          this.getData.push(item.bank);
        }
      });
      // console.log(this.number)
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = echarts.init(document.getElementById("myChart1"));
      // 绘制图表
      myChart1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "none"
          },
          formatter: function(params) {
            return params[0].name + ": " + params[0].value;
          }
        },
        xAxis: {
          data: this.getData,
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: {
            color: "#00A9FF",
            interval: 0,
            rotate: 40
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisTick: { show: false },
          axisLine: { show: false },
          axisLabel: { show: false }
        },
        // color: ["#4931A9","#5D30A7","#320B99","#4C7FA0","#009DA7","#00729D","#0B717A","#6B834D","#6B834D","#95713F","#915B39","#915B3A","#8E4336","#8E4336","#946F5A","#56527E","#33477A"],

        // color: ["#4931A9"],

        series: [
          {
            name: "hill",
            type: "pictorialBar",
            barCategoryGap: "-130%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol:
              "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
              opacity: 0.5,

              normal: {
                //这里是重点
                color: function(params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = [
                    "#4931A9",
                    "#5D30A7",
                    "#320B99",
                    "#4C7FA0",
                    "#009DA7",
                    "#00729D",
                    "#0B717A",
                    "#6B834D",
                    "#6B834D",
                    "#95713F",
                    "#915B39",
                    "#915B3A",
                    "#8E4336",
                    "#8E4336",
                    "#946F5A",
                    "#56527E"
                  ];
                  return colorList[params.dataIndex];
                },
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  // formatter: "{c}%",
                  textStyle: {
                    //数值样式
                    // color: "#56527E",
                    fontSize: 16
                  }
                }
              }
            },
            emphasis: {
              itemStyle: {
                opacity: 1
              }
            },
            data: this.number,
            z: 16
          },
          {
            name: "glyph",
            type: "pictorialBar",
            barGap: "-100%",
            symbolPosition: "end",
            symbolSize: 50,
            symbolOffset: [0, "-120%"]
          }
        ]
      });
    }
  },
  watch: {
    ClickSuccessRate1(newVal, oldVal) {
      this.ClickSuccessRate1 = newVal;
      this.drawLine();
    }
  }
};
</script>
<style scoped>
#myChart1 {
  position: absolute;
  top: 50px;
  left: -33px;
}
</style>
