<template>
  <div class="zengSu">
    <!-- <div class="title">涕延后收入</div> -->
    <Title text='增速 Growth Rate' class="title"></Title>
    <ZengSuItem :GrowthRate='GrowthRate'></ZengSuItem>
    <div class="grade">
      <div class="grade_title">增速排名</div>
      <div class="grade_name" :style='grade_name_style' ref="element">
        <ZengSuPaiMing v-for=" (item,index) in paiMing" :key="index">
          <div class="grade_name_item">{{index+1}}:{{item.area}}</div>
        </ZengSuPaiMing>
      </div>
    </div>
  </div>
</template>
<script>
import ZengSuItem from "@/components/page/zengSu/zengSuCom/ZengSuItem";
import Title from "@/components/page/title/Title";
import ZengSuPaiMing from "@/components/page/zengSu/zengSuCom/ZengSuPaiMing";

export default {
  name: "ZengSu",
  data() {
    return {
      paiMing: [],
      flag: 1,
      grade_name_style: { top: "30px" },
      height: 0,
      timer: null,
      children: []
    };
  },
  props: {
    GrowthRate: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.grow();
  },
  methods: {
    grow() {
      clearInterval(this.timer);
      this.height = this.$refs.element.offsetHeight; //100

      // this.children =  this.$refs.element.children;

      this.paiMing = [];
      this.GrowthRate.forEach(item => {
        if (item.bank == null) {
          this.paiMing.push({
            area: item.area,
            growth: item.growth
          });
        } else {
          this.paiMing.push({
            area: item.bank,
            growth: item.growth
          });
        }
      });
      this.paiMing.sort(function(a, b) {
        return a - b;
      });

      // dom渲染之后执行的函数
      this.$nextTick(() => {
        this.children = this.$refs.element.children;
        console.log(this.children.length);

        if (this.children.length <= 9) {
          this.grade_name_style.top = "30px";
        } else {
          this.timer = setInterval(() => {
            // console.log(parseInt(this.grade_name_style.top)));
            if (parseInt(this.grade_name_style.top) <= -this.height + 60) {
              console.log(111);
              this.grade_name_style.top = "30px";
            } else {
              this.grade_name_style.top =
                parseInt(this.grade_name_style.top) - 1 + "px";
            }
          }, 200);
        }
      });
    }
  },
  components: {
    ZengSuItem,
    Title,
    ZengSuPaiMing
  },
  watch: {
    GrowthRate(newVal, oldVal) {
      this.GrowthRate = newVal;
      this.grow();
    },
    grade_name_style(newVal, oldVal) {
      this.grade_name_style = newVal;
      console.log(this.grade_name_style.top);
    }
  }
};
</script>
<style scoped>
.zengSu {
  position: absolute;
  height: 300px;
  width: 600px;
  top: 26px;
  left: 52px;
}

.title {
  width: 600px;
}

.grade {
  position: absolute;
  top: 40px;
  left: 400px;
  width: 190px;
  height: 232px;
  border: 1px solid rgba(1, 131, 254, 1);
  overflow: hidden;
}
.grade_title {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  line-height: 30px;
  font-size: 15px;

  font-weight: 400;
  color: #00a9ff;
  text-align: center;
  /* background: url("../../../assets/dataImage/grade_title.png") center no-repeat; */

  background: RGBA(0, 11, 40, 1);
  z-index: 1;
}

.grade_name {
  position: absolute;
  /* top: 30px; */
  left: 0;
  color: #00a9ff;
  width: 100%;
  height: 200px;
  /* overflow: hidden; */
  z-index: 0;
}
/* .active {
  animation: move 5s linear infinite;
} */

@keyframes move {
  from {
    top: 30px;
  }
  to {
    top: -120px;
  }
}

.grade_name_item {
  width: 100%;
  height: 22px;
  line-height: 22px;
  text-align: left;
}
</style>