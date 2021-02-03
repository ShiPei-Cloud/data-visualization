<template>
  <div class="data">
    <Title></Title>
    <!-- <component :is="comName"></component> -->

    <Map v-show="show ==1" @quData='getQuName'></Map>
    <component v-show="show !=1" :is="quZhiHang"></component>
    <div class="fanhui" @click='show=1' v-show="show!=1">返回</div>
    <div class="left">
      <div class="eFenGou" @click='shift(1)' :class="active==1?'active':''">一分购</div>

      <div class="fenQiTong" @click='shift(2)' :class="active==2?'active':''">分期通</div>

      <Zong :TotalDialing1='active==1?TotalDialing1:TotalDialing'></Zong>
      <Success class="data_success" :SuccessfulDialing1='active==1?SuccessfulDialing1:SuccessfulDialing'></Success>
    </div>
    <div class="middle">
      <div class="middle_left">

        <Click :ClickSuccessRate1='active==1?ClickSuccessRate1:ClickSuccessRate'></Click>
        <ShouRu :revenues='revenues'></ShouRu>
      </div>
      <div class="middle_right">
        <JinJianShu :YearsAccumulative='YearsAccumulative'></JinJianShu>
        <JiaoYiE :AnnualCumulativeTurnover='AnnualCumulativeTurnover'></JiaoYiE>
      </div>
    </div>
    <div class="right">
      <ZengSu :GrowthRate='GrowthRate'></ZengSu>
      <YuE :LoanBalance='LoanBalance'></YuE>
    </div>
  </div>
</template>
<script>
import Title from "@/components/page/Title";
import Map from "@/components/page/Map";
import Success from "@/components/page/success/Success";
import ShouRu from "@/components/page/shouRu/ShouRu";
import JinJianShu from "@/components/page/jinJianShu/JinJianShu";
import JiaoYiE from "@/components/page/jiaoYiE/JiaoYiE";
import Click from "@/components/page/click/Click";
import ZengSu from "@/components/page/zengSu/ZengSu";
import YuE from "@/components/page/yuE/YuE";
import Zong from "@/components/page/zong/Zong";
import QingPu from "@/components/maps/QingPu";
import PuTuo from "@/components/maps/PuTuo";
import JiaDing from "@/components/maps/JiaDing";





export default {
  name: "Data",
  data() {
    return {
      active: 1,
      TotalDialing1: [],
      AnnualCumulativeTurnover: [],
      ClickSuccessRate: [],
      ClickSuccessRate1: [],
      GrowthRate: [],
      LoanBalance: [],
      SuccessfulDialing: [],
      SuccessfulDialing1: [],
      TotalDialing: [],

      YearsAccumulative: [],
      revenues: [],
      show: 1,
      quZhiHang:''
    };
  },
  mounted() {
    this.$axios.get("http://192.168.1.136:8060/42floor/bank").then(res => {
      console.log(res.data.YearsAccumulative);
      this.AnnualCumulativeTurnover = res.data.AnnualCumulativeTurnover;
      this.ClickSuccessRate = res.data.ClickSuccessRate;
      this.ClickSuccessRate1 = res.data.ClickSuccessRate1;
      this.GrowthRate = res.data.GrowthRate;
      this.LoanBalance = res.data.LoanBalance;
      this.SuccessfulDialing = res.data.SuccessfulDialing;
      this.SuccessfulDialing1 = res.data.SuccessfulDialing1;
      this.TotalDialing = res.data.TotalDialing;
      this.TotalDialing1 = res.data.TotalDialing1;
      this.YearsAccumulative = res.data.YearsAccumulative;
      this.revenues = res.data.revenues;
    });
  },
  components: {
    Title,
    Map,
    Success,
    ShouRu,
    JinJianShu,
    JiaoYiE,
    Click,
    ZengSu,
    YuE,
    Zong,
    QingPu,
    PuTuo,
    JiaDing
  },
  methods: {
    shift(index) {
      // this.$destroy('Success');
      this.active = index;
      console.log(index);
    },
    getQuName(name) {
      this.show=2;
      console.log(name)
      if(name=='青浦区'){
        this.quZhiHang='QingPu'
      }else if(name=='普陀区'){
        this.quZhiHang='PuTuo'
      }else if(name=='嘉定区'){
            console.log(name)
        this.quZhiHang='JiaDing'
      }
      // this.$axios
      //   .get(`http://192.168.1.136:8060/42floor/area?area=${name}`)
      //   .then(res => {
      //     console.log(res.data.YearsAccumulative);
      //     console.log(res.data.AnnualCumulativeTurnover);
      //     this.AnnualCumulativeTurnover = res.data.AnnualCumulativeTurnover;
      //     this.ClickSuccessRate = res.data.ClickSuccessRate;
      //     this.ClickSuccessRate1 = res.data.ClickSuccessRate1;
      //     this.GrowthRate = res.data.GrowthRate;
      //     this.LoanBalance = res.data.LoanBalance;
      //     this.SuccessfulDialing = res.data.SuccessfulDialing;
      //     this.SuccessfulDialing1 = res.data.SuccessfulDialing1;
      //     this.TotalDialing = res.data.TotalDialing;
      //     this.TotalDialing1 = res.data.TotalDialing1;
      //     this.YearsAccumulative = res.data.YearsAccumulative;
      //     this.revenues = res.data.revenues;
      //   });
    }
  }
};
</script>
<style scoped >
.data {
  position: relative;
  width: 3584px !important;
  height: 640px !important;
  background: url("../assets/dataImage/bg.png") center no-repeat;
  /* font-family: Gentium !important; */
  /* 修改字体 */
  /* font-family: mFont ; */
}
.fanhui{
  position: absolute;
  bottom:10px;
  left: 600px;
  width: 100px;
  height: 50px;
  background: red;
}

/* .data_success{
    position: absolute;
    top: 300px;

} */
.left {
  position: absolute;
  width: 641px;
  height: 630px;
  left: 725px;
  top: 5px;
  background: url("../assets/dataImage/leftBorder.png") center no-repeat;
}

.fenQiTong,
.eFenGou {
  position: absolute;
  top: 9px;
  width: 111px;
  height: 37px;
  background: url("../assets/dataImage/no_active.png") center no-repeat;
  text-align: center;
  font-size: 16px;
  color: #0075ff;
  line-height: 37px;
}
.fenQiTong,
.eFenGou {
  right: 50px;
}

.eFenGou {
  right: 190px;
}

.middle {
  position: absolute;
  width: 1432px;
  height: 630px;
  left: 1413px;
  top: 5px;
  background: url("../assets/dataImage/middleBorder.png") center no-repeat;
}

.middle_left {
  position: absolute;
  width: 700px;
  height: 100%;
  left: 0;
  top: 0;
}

.middle_right {
  position: absolute;
  width: 700px;
  height: 100%;
  right: 0;
  top: 0;
}

.right {
  position: absolute;
  width: 702px;
  height: 630px;
  right: 28px;
  top: 5px;
  background: url("../assets/dataImage/rightBorder.png") center no-repeat;
  /* background-size: contain; */
}

.active {
  background: url("../assets/dataImage/active.png") center no-repeat;
  /* color:red; */
}
</style>