<template>
  <div class="data">
    <Title></Title>
    <!-- <component :is="comName"></component> -->

    <Map v-show="show ==1" @quData='getQuName'></Map>
    <component class="quZhiHang" v-show="show !=1" :is="quZhiHang" @getData='getMessage'></component>
    <div class="fanhui" @click='returnGo' v-show="show!=1"></div>

    <transition>
      <div class="shuju" v-show='shuju!=1'>
        <DataShow v-show="yiFenGou==1" dataName='总拨打量' :dataNumber='fenqi.callNum'></DataShow>
        <DataShow v-show="yiFenGou==1" dataName='成功量' :dataNumber='fenqi.growth'></DataShow>
        <DataShow v-show="yiFenGou==1" dataName='点选成功率' :dataNumber='fenqi.transaction'></DataShow>
        <DataShow v-show="yiFenGou==1" dataName='递延后收入' :dataNumber='fenqi.loan'></DataShow>
        <DataShow v-show="yiFenGou==1" dataName='年累计进件数' :dataNumber='fenqi.purchases'></DataShow>
        <DataShow v-show="yiFenGou==1" dataName='年交易额' :dataNumber='fenqi.revenue'></DataShow>
        <DataShow v-show="yiFenGou==1" dataName='增速' :dataNumber='fenqi.sucmount'></DataShow>
        <DataShow v-show="yiFenGou==1" dataName='贷款余额' :dataNumber='fenqi.surate'></DataShow>
        <DataShow v-show="yiFenGou !=1" dataName='总拨打量' :dataNumber='yifen.callNum'></DataShow>
        <DataShow v-show="yiFenGou !=1" dataName='成功量' :dataNumber='yifen.sucmount'></DataShow>
        <DataShow v-show="yiFenGou !=1" dataName='点选成功率' :dataNumber='yifen.surate'></DataShow>

      </div>
    </transition>

    <div class="left" :style="left_style">
      <div class="eFenGou" @click='shift(1)' :class="active==1?'active':''">一分购</div>

      <div class="fenQiTong" @click='shift(2)' :class="active==2?'active':''">分期通</div>

      <Zong :TotalDialing1='active==1?TotalDialing1:TotalDialing'></Zong>
      <Success class="data_success" :SuccessfulDialing1='active==1?SuccessfulDialing1:SuccessfulDialing'></Success>
    </div>
    <div class="middle" :style="middle_style">
      <div class="middle_left">

        <Click :ClickSuccessRate1='active==1?ClickSuccessRate1:ClickSuccessRate'></Click>
        <ShouRu :revenues='revenues'></ShouRu>
      </div>
      <div class="middle_right">
        <JinJianShu :YearsAccumulative='YearsAccumulative'></JinJianShu>
        <JiaoYiE :AnnualCumulativeTurnover='AnnualCumulativeTurnover'></JiaoYiE>
      </div>
    </div>
    <div class="right" :style="right_style">
      <ZengSu :GrowthRate='GrowthRate'></ZengSu>
      <YuE :LoanBalance='LoanBalance'></YuE>
    </div>
  </div>
</template>
<script>
import Title from "@/components/page/Title";
import Map from "@/components/page/Map";
import DataShow from "@/components/page/DataShow";

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
import HuangPu from "@/components/maps/HuangPu";
import HongKou from "@/components/maps/HongKou";
import FengXian from "@/components/maps/FengXian";
import ChongMing from "@/components/maps/ChongMing";
import PuDong from "@/components/maps/PuDong";
import BaoShan from "@/components/maps/BaoShan";
import JingAn from "@/components/maps/JingAn";
import JinShan from "@/components/maps/JinShan";
import MinHang from "@/components/maps/MinHang";
import ChangNing from "@/components/maps/ChangNing";
import YangPu from "@/components/maps/YangPu";
import XuHui from "@/components/maps/XuHui";
import SongJiang from "@/components/maps/SongJiang";

export default {
  name: "Data",
  data() {
    return {
      active: 1,

      left_style: {
        left: "725px"
      },
      middle_style: {
        left: "1413px"
      },
      right_style: {
        right: "28px"
      },
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
      // 数据的显示与隐藏
      shuju: 1,
      // 返回键的显示与隐藏
      show: 1,
      quZhiHang: "",
      fenqi: {},
      yifen: {},
      yiFenGou: 1
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
    DataShow,
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
    JiaDing,
    HuangPu,
    HongKou,
    FengXian,
    ChongMing,
    PuDong,
    BaoShan,
    JingAn,
    JinShan,
    MinHang,
    ChangNing,
    YangPu,
    XuHui,
    SongJiang
  },
  methods: {
    shift(index) {
      // this.$destroy('Success');
      this.yiFenGou = index;
      // console.log(this.yiFenGou)
      this.active = index;
      console.log(index);
    },
    returnGo() {
      this.show = 1;
      this.shuju = 1;
      this.left_style.left = "725px";
      this.middle_style.left = "1413px";
      this.right_style.right = "28px";
    },
    getQuName(name) {
      this.show = 2;
      console.log(name);
      if (name == "青浦区") {
        this.quZhiHang = "QingPu";
      } else if (name == "普陀区") {
        this.quZhiHang = "PuTuo";
      } else if (name == "嘉定区") {
        console.log(name);
        this.quZhiHang = "JiaDing";
      } else if (name == "黄浦区") {
        this.quZhiHang = "HuangPu";
      } else if (name == "虹口区") {
        this.quZhiHang = "HongKou";
      } else if (name == "奉贤区") {
        this.quZhiHang = "FengXian";
      } else if (name == "崇明区") {
        this.quZhiHang = "ChongMing";
      } else if (name == "浦东新区") {
        this.quZhiHang = "PuDong";
      } else if (name == "宝山区") {
        this.quZhiHang = "BaoShan";
      } else if (name == "静安区") {
        this.quZhiHang = "JingAn";
      } else if (name == "金山区") {
        this.quZhiHang = "JinShan";
      } else if (name == "闵行区") {
        this.quZhiHang = "MinHang";
      } else if (name == "长宁区") {
        this.quZhiHang = "ChangNing";
      } else if (name == "杨浦区") {
        this.quZhiHang = "YangPu";
      } else if (name == "徐汇区") {
        this.quZhiHang = "XuHui";
      } else if (name == "松江区") {
        this.quZhiHang = "SongJiang";
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
    },
    getMessage(message) {
      if (message.fenqi.length == 0) return;
      if (message.fenqi.yifen == 0) return;
      this.shuju = 2;
      console.log(message);
      this.left_style.left = "812px";
      this.middle_style.left = "1451px";
      this.right_style.right = "0px";
      this.fenqi = message.fenqi[0];
      this.yifen = message.yifen[0];

      // console.log(message);
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

.quZhiHang {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
}

.fanhui {
  position: absolute;
  bottom: 10px;
  left: 540px;
  width: 77px;
  height: 77px;
  background: url("../assets/dataImage/返回.png") center no-repeat;

  z-index: 999;
}

.shuju {
  position: absolute;
  left: 700px;
  top: 5px;
  width: 116px;
  height: 630px;
  transition: all 0.3s linear;
  display:flex;
  flex-direction:column;
  justify-content:space-evenly;
}

/* .data_success{
    position: absolute;
    top: 300px;

} */
.left {
  position: absolute;
  width: 641px;
  height: 630px;
  top: 5px;
  transition: all 0.3s linear;

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
  /* left: 1413px;*/
  top: 5px;
  background: url("../assets/dataImage/middleBorder.png") center no-repeat;

  transition: all 0.3s linear;
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
  /* right: 28px; */
  top: 5px;
  background: url("../assets/dataImage/rightBorder.png") center no-repeat;
  /* background-size: contain; */

  transition: all 0.3s linear;
}

.active {
  background: url("../assets/dataImage/active.png") center no-repeat;
  /* color:red; */
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease;
}
</style>