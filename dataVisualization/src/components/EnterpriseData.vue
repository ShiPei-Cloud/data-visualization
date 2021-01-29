<template>
  <div class="enterpriseData">
    <div class="left_title"></div>
    <z-map></z-map>
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
    <div class="lineData">
      <!-- <z-line-chart 
        class="lineChart-items"
        echart-line-title="近一年访问量"
        :line-chart-data="visitsInRecentYear"
        line-chart-data-key="month"
        line-chart-data-value="number">
      </z-line-chart> -->
    </div>
    <div class="barData">
      <!-- <z-bar-chart></z-bar-chart> -->
    </div>
    <div class="applicationData">

    </div>

    <div class="templateDistribution"></div>
  </div>
</template>

<script>
import zMap from "./tools/Map";
import zMainData from "./tools/MainData";
import zBarChart from "./BarChart";
import zLineChart from './EchartLine';
export default {
  name: "EnterpriseData",
  components: {
    zMap,
    zMainData,
    zBarChart,
    zLineChart
  },
  data() {
    return {
      mapData: [
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
      barchartdata: [
        {
          name: "用户分布",
          data: [
            {
              name: "网点",
              count: 801,
            },
            {
              name: "二级行",
              count: 1575,
            },
            {
              name: "部分行",
              count: 341,
            },
          ],
        },
        {
          name:'模板分布',
          data:[
            {
              name: "总行模板",
              count: 905,
            },
            {
              name: "分行模板",
              count: 853,
            }
          ]
        },
        {
          name:'访问量分布',
          data:[
            {
              name: "总行模板",
              count: 270445,
            },
            {
              name: "分行模板",
              count: 301177,
            },
            {
              name: "网点负责人",
              count: 189057,
            },
          ]
        }
      ],
      visitsInRecentYear:[
        {
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        },{
          "month":'1月',
          "number":35010
        }
      ]
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
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

.lineData{
  position: absolute;
  .ltwh(1348px, 4px, 661px, 314px);
  .bg(url('../assets/img/components/EnterpriseData/lineChart/lineChartBorder.png'));

  .lineChart-items{
    width:100%;
    height:100%
  }
}

.barData{
  position: absolute;
  .ltwh(1348px, 327px, 1301px, 308px);
  .bg(url('../assets/img/components/EnterpriseData/barChart2/barChartBorder2.png'))
}

.applicationData{
  position: absolute;
  .ltwh(2013px, 4px, 636px, 314px);
  .bg(url('../assets/img/components/EnterpriseData/applicationData/applicationDataBorder.png'))
}

.templateDistribution{
  position: absolute;
  .ltwh(2658px, 4px, 522px, 630px);
  .bg(url('../assets/img/components/EnterpriseData/templateDistribution/templateDistributionBorder.png'))
}
</style>
