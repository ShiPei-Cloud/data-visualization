<template>
  <div class="enterpriseData">
    <div class="left_title" @click="()=>{zhihangCom = 'PuTuo'}"></div>
    <component class="mapCom" :is="zhihangCom"></component>
    <div class="mapData">
      <z-main-data
        class="mapData-items"
        v-for="item in mapData"
        :key="item.name"
        :data-name="item.name"
        :data-number="item.number"
      ></z-main-data>
    </div>
    <div class="barsData">
      <div class="barDataInner">
        <z-bar-chart
          class="barChart-items"
          v-for="item in barchartdata"
          :key="item.name"
          :bar-chart-data="item.data"
          :bar-chart-title="item.name"
        ></z-bar-chart>
      </div>
    </div>
    <div class="visitsInRecentYear">
      <z-line-chart
        class="lineChart-items"
        :echart-line-title="echartLineTitle"
        :line-chart-data="visitsInRecentYear"
        line-chart-data-key="month"
        line-chart-data-value="click"
      >
      </z-line-chart>
    </div>
    <div class="userDistribution">
      <z-bar-echart
        class="barChart-items"
        :echart-bar-title="echartBarTitle"
        :bar-chart-data="userDistribution"
        bar-chart-data-key="branch"
        bar-chart-data-value="pv"
      >
      </z-bar-echart>
    </div>
    <div class="applicationData">
      <z-data-head
        class="dataHead"
        id="applicationDataHead"
        :data-head-ch="applicationDataTitle.CN"
        :data-head-en="applicationDataTitle.EN"
      ></z-data-head>
      <div class="circleDataContainer">
        <z-circle-data
          class="circleData-items"
          v-for="(item, index) in circleData"
          :key="index"
          :style="item.style"
          :data-name="item.name"
        >
        </z-circle-data>
      </div>
    </div>

    <div class="templateDistribution">
      <z-pie-chart
        class="pieChart-items"
        id="templateDistributionHead"
        :echart-pie-title="echartPieTitle"
        :pie-chart-config="pieChartConfig"
        :pie-chart-data="templateDistribution"
        pie-chart-data-key="department"
        pie-chart-data-value="num"
      >
      </z-pie-chart>
    </div>
    <div class="starTemplate">
      <z-data-head
        class="dataHead"
        id="starTemplateHead"
        :data-head-ch="starTemplateTitle.CN"
        :data-head-en="starTemplateTitle.EN"
      ></z-data-head>
      <div class="starTemplate-data">
        <ul :style="urlRoll">
          <li v-for="item in starTemplateData" :key="item.name">
            <span class="number">{{ item.rank }}</span>
            <span class="name">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import zMap from "./page/Map";
import zMainData from "./tools/MainData";
import zBarChart from "./BarChart";
import zLineChart from "./EchartLine";
import zBarEchart from "./EchartBar";
import zPieChart from "./EchartPie";
import zDataHead from "./tools/DataHead";
import zCircleData from "./tools/CircleData";

//支行
import BaoShan from './maps/BaoShan'
import JinShan from './maps/JinShan'
import PuTuo from './maps/PuTuo'

import fetch from "../fetch.js";
export default {
  name: "EnterpriseData",
  components: {
    zMap,
    zMainData,
    zBarChart,
    zLineChart,
    zBarEchart,
    zPieChart,
    zDataHead,
    zCircleData,
    BaoShan,
    JinShan,
    PuTuo
  },
  data() {
    return {
      mapData: [
        //地图maindata
        {
          name: "用户数",
          number: [12717],
        },
        {
          name: "模板数",
          number: [1758],
        },
        {
          name: "访问量",
          number: [760679],
        },
      ],
      barchartdata: [],
      visitsInRecentYear: [],
      userDistribution: [],
      templateDistribution: [],
      pieChartConfig: {
        legend: {
          height: "25%",
          width: "100%",
          left: "center",
          top: "bottom",
        },
        series: {
          radius: [60, 190],
          center: ["45%", "43%"],
        },
        itemStyle: {
          borderWidth: 6, //设置border的宽度有多大
          borderColor: "#031325",
        },
      },
      starTemplateData: [],
      circleData: [
        {
          name: "新应用模式",
          style: {
            width: "140px",
            height: "140px",
            color: "#00D0FF",
            lineHeight: "140px",
            left: "30px",
            top: "80px",
            border: "2px solid #00D0FF",
            boxShadow: "0px 0px 40px #00D0FF inset,0px 0px 30px #00D0FF",
            opacity: "0.9",
          },
        },
        {
          name: "数据直播厅",
          style: {
            width: "119px",
            height: "119px",
            color: "#DCC85B",
            lineHeight: "119px",
            left: "190px",
            top: "150px",
            border: "2px solid #DCC85B",
            boxShadow: "0px 0px 30px #DCC85B inset,0px 0px 30px #DCC85B",
            opacity: "0.9",
          },
        },
        {
          name: "网点体验单",
          style: {
            width: "140px",
            height: "140px",
            color: "#7079FE",
            lineHeight: "140px",
            left: "310px",
            top: "60px",
            border: "2px solid #7079FE",
            boxShadow: "0px 0px 40px #7079FE inset,0px 0px 30px #7079FE",
            opacity: "0.9",
          },
        },
        {
          name: "智数动查",
          style: {
            width: "110px",
            height: "110px",
            color: "#00BAFF",
            lineHeight: "110px",
            left: "470px",
            top: "140px",
            border: "1px solid #00BAFF",
            boxShadow: "0px 0px 30px #00BAFF inset,0px 0px 20px #00BAFF",
            opacity: "0.9",
          },
        },
        {
          name: "",
          style: {
            width: "60px",
            height: "60px",
            color: "#16BD27",
            left: "30px",
            top: "250px",
            border: "1px solid #16BD27",
            boxShadow: "0px 0px 20px #16BD27 inset,0px 0px 10px #16BD27",
            opacity: "0.7",
          },
        },
        {
          name: "",
          style: {
            width: "70px",
            height: "70px",
            color: "#00D0FF",
            left: "210px",
            top: "60px",
            border: "0.5px solid #D76026",
            boxShadow: "0px 0px 30px #D76026 inset,0px 0px 20px #D76026",
            opacity: "0.4",
          },
        },
        {
          name: "",
          style: {
            width: "30px",
            height: "30px",
            color: "#0A8F77",
            left: "330px",
            top: "210px",
            border: "0.5px solid #0A8F77",
            boxShadow: "0px 0px 15px #0A8F77 inset,0px 0px 20px #0A8F77",
            opacity: "0.3",
          },
        },
        {
          name: "",
          style: {
            width: "64px",
            height: "64px",
            color: "#00D0FF",
            left: "500px",
            top: "60px",
            border: "1px solid #F000FF",
            boxShadow: "0px 0px 20px #F000FF inset,0px 0px 30px #F000FF",
            opacity: "0.4",
          },
        },
        {
          name: "",
          style: {
            width: "60px",
            height: "60px",
            color: "#00D0FF",
            left: "400px",
            top: "210px",
            border: "1px solid #B38A74",
            boxShadow: "0px 0px 20px #B38A74 inset,0px 0px 30px #B38A74",
            opacity: "0.4",
          },
        },
      ],
      echartLineTitle: { CN: "近一年访问量", EN: "Visits In Recent Year" }, //数据标题中英文
      echartBarTitle: { CN: "用户分布", EN: "User Distribution" },
      starTemplateTitle: { CN: "明星模板", EN: "Star Template" },
      echartPieTitle: { CN: "模板分布", EN: "Template Distribution" },
      applicationDataTitle: { CN: "新模式应用", EN: "Application Of New Mode" },
      urlRoll: {
        top: 0,
      },
      urlRollNum: 0,
      int: null,
      zhihangCom:'zMap'
    };
  },
  mounted: function () {
    // 获取初始数据
    this.getFirstData();
    // 明星模块滚动
    let _this = this;
    function int(th) {
      let int1 = setInterval(() => {
        if (th.urlRollNum <= -750) {
          clearInterval(int1);
          setTimeout(() => {
            th.urlRollNum = 0;
            th.urlRoll = {
              top: "0px",
            };
          }, 2000);
          setTimeout(()=>{
            int(_this);
          },3000)
        }
        th.urlRollNum -= 1;
        th.urlRoll = {
          top: th.urlRollNum + "px",
        };
      }, 50);
    };
    int(_this);
  },
  methods: {
    getFirstData: function () {
      fetch("/distribution", "json").then((res) => {
        console.log(res);
        try {
          let rs = JSON.stringify(res);
          console.log(`初始化右侧固定数据：${rs}`);
        } catch (error) {
          console.log(error);
        }
        this.templateDistribution = res.data.Template; //模板分布，pieChart
        this.visitsInRecentYear = res.data.VisitsInRecentYear; //近一年访问量，lineChart
        this.userDistribution = res.data.User; //用户分布，barChart
        this.barchartdata = [
          //用户分布 模板分布 访问量分布
          {
            name: "用户分布",
            data: res.data.UserDistribution,
          },
          {
            name: "模板分布",
            data: res.data.TemplateDistribution,
          },
          {
            name: "访问量分布",
            data: res.data.TrafficDistribution,
          },
        ];
        this.starTemplateData = res.data.Star; //明星模板
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@font-face {
  font-family: mFont;
  src: url("../assets/font/Furore-2.otf");
}

.bg(@url,@size:100%100%) {
  background: @url no-repeat;
  background-size: @size;
}

.ltwh(@l,@t,@w,@h) {
  //left top width height
  left: @l;
  top: @t;
  width: @w;
  height: @h;
}

.left_title {
  position: absolute;
  .ltwh(0px,0px,90px,640px);
  .bg(url("../assets/img/components/EnterpriseData/title.png"));
}

.mapCom{
  position: absolute;
  .ltwh(50px, 20px, 600px, 600px);
}

.mapData {
  position: absolute;
  .ltwh(570px, 42px, 171px, 266px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.barsData {
  position: absolute;
  .ltwh(748px, 2px, 591px, 630px);
  .bg(url("../assets/img/components/EnterpriseData/barChart/barChartBorder.png"));

  .barDataInner {
    position: absolute;
    .ltwh(40px, 53px, 512px, 553px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .barChart-items {
      width: 512px;
      height: 164px;
    }
  }
}

.visitsInRecentYear {
  position: absolute;
  .ltwh(1348px, 4px, 661px, 314px);
  .bg(url("../assets/img/components/EnterpriseData/lineChart/lineChartBorder.png"));

  .dataHead {
    position: absolute;
    .ltwh(0, 0, 100%, 40px);
  }

  .lineChart-items {
    width: 100%;
    height: 100%;
  }
}

.userDistribution {
  position: absolute;
  .ltwh(1348px, 327px, 1301px, 308px);
  .bg(url("../assets/img/components/EnterpriseData/barChart2/barChartBorder2.png"));

  .barChart-items {
    width: 100%;
    height: 100%;
  }
}

.applicationData {
  position: absolute;
  .ltwh(2013px, 4px, 636px, 314px);
  .bg(url("../assets/img/components/EnterpriseData/applicationData/applicationDataBorder.png"));

  #applicationDataHead {
    //非echarts图标的标题需要自行左移20px
    left: 20px;
  }

  .circleDataContainer {
    position: absolute;
    width: 596px;
    height: 90%;
    left: 20px;
    bottom: 20px;
    overflow: hidden;
  }
}

.templateDistribution {
  position: absolute;
  .ltwh(2658px, 4px, 522px, 630px);
  .bg(url("../assets/img/components/EnterpriseData/templateDistribution/templateDistributionBorder.png"));

  .pieChart-items {
    width: 100%;
    height: 100%;
  }
}

.starTemplate {
  position: absolute;
  .ltwh(3189px, 4px, 380px, 631px);
  .bg(url("../assets/img/components/EnterpriseData/starTemplate/starTemplateBorder.png"));
  font-family: mFont;

  #starTemplateHead {
    //非echarts图标的标题需要自行左移20px
    left: 20px;
    font-family: "Source Han Sans CN";
  }

  .starTemplate-data {
    position: absolute;
    .ltwh(5%,12%,90%,85%);
    overflow: hidden;

    ul {
      position: absolute;
      .ltwh(0,0,100%,100%);
      color: #00a9ff;
      font-size: 9px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: linear all 0.5s;

      li {
        height: 48px;
        width: 100%;
        line-height: 20px;
        margin-top: 15px;
        // margin-bottom: 10px;

        .number {
          position: relative;
          display: inline-block;
          width: 80px;
          height: 100%;
          text-align: center;
          font-family: mFont;
          font-size: 35px;

          &::after {
            content: "";
            position: absolute;
            left: 30px;
            height: 80%;
            top: -19%;
            width: 102px;
            .bg(url("../assets/img/components/EnterpriseData/starTemplate/splitBorder.png"));
          }
        }

        .name {
          display: inline-block;
          font-size: 15px;
          width: 238px;
          height: 100%;
        }
      }
    }
  }
}
</style>
