<template>
  <div class="about">
    <!-- <div class="title">涕延后收入</div> -->
    <Title text='递延后收入 Click Success Rate'></Title>
    <div class="left">
      <SuccessItem v-for="(item,index) in cityLeft" :key="item.name" :city='item.area' :widthL='item.revenue'
        :position='2' :background='cityLeftColor[index]'></SuccessItem>
    </div>
    <div class="right">
      <SuccessItem v-for="(item,index) in cityRight" :key="item.name" :city='item.area' :widthL='item.revenue'
        :position='2' :background='cityRightColor[index]'></SuccessItem>
    </div>
  </div>
</template>
<script>
import SuccessItem from "@/components/page/success/successCom/SuccessItem";
import Title from "@/components/page/title/Title";
export default {
  name: "ShouRu",
  created() {
    // require(`../assets/css/00${this.$route.params.id}.css`);
  },
  data() {
    return {
      cityLeftColor: [
        "#3884FC",
        "#FFB769",
        "#F9E264",
        "#FFB769",
        "#F5626E",
        "#FBA998",
        "#BB60B1",
        "#AF87FE"
      ],
      cityRightColor: [
        "#B034E9",
        "#4F17CD",
        "#171CCD",
        "#023A92",
        "#0F86B7",
        "#049CB1",
        "#26CCD8",
        "#9DDDFA"
      ],

      cityLeft: [
        // {
        //   name: "浦东新区",
        //   num: 500,
        //   color: "#3884FC"
        // },
        // {
        //   name: "奉贤区",
        //   num: 50,
        //   color: "#FFB769"
        // },
        // {
        //   name: "普陀区",
        //   num: 50,
        //   color: "#F9E264"
        // },
        // {
        //   name: "长宁区",
        //   num: 500,
        //   color: "#FFB769"
        // },
        // {
        //   name: "徐汇区",
        //   num: 50,
        //   color: "#F5626E"
        // },
        // {
        //   name: "黄浦区",
        //   num: 500,
        //   color: "#FBA998"
        // },
        // {
        //   name: "虹口区",
        //   num: 5000,
        //   color: "#BB60B1"
        // },
        // {
        //   name: "金山区",
        //   num: 500,
        //   color: "#AF87FE"
        // }
      ],
      cityRight: [
        // {
        //   name: "静安区",
        //   num: 60,
        //   color: "#B034E9"
        // },
        // {
        //   name: "松江区",
        //   num: 300,
        //   color: "#4F17CD"
        // },
        // {
        //   name: "闵行区",
        //   num: 1000,
        //   color: "#171CCD"
        // },
        // {
        //   name: "杨浦区",
        //   num: 60,
        //   color: "#023A92"
        // },
        // {
        //   name: "宝山区",
        //   num: 300,
        //   color: "#0F86B7"
        // },
        // {
        //   name: "崇明区",
        //   num: 1000,
        //   color: "#049CB1"
        // },
        // {
        //   name: "嘉定区",
        //   num: 60,
        //   color: "#26CCD8"
        // },
        // {
        //   name: "青浦区",
        //   num: 300,
        //   color: "#9DDDFA"
        // }
      ]
    };
  },
  props: {
    revenues: {
      type: Array,
      default: []
    }
  },
  components: {
    SuccessItem,
    Title
  },
  methods: {
    getData(first, end, arr) {
      for (let i = first; i < end; i++) {
        // arr.push(this.revenues[i]);
        if (this.revenues[i].bank == null) {
          arr.push({
            area: this.revenues[i].area,
            sucmount: Number(this.revenues[i].sucmount)
          });
        } else {
          arr.push({
            area: this.revenues[i].bank,
            sucmount: Number(this.revenues[i].sucmount)
          });
        }
      }
    }
  },
  watch: {
    revenues(newVal, oldVal) {
      this.revenues = newVal;
      this.cityLeft = [];
      this.cityRight = [];
      // console.log(Math.ceil( this.revenues));
      this.getData(
        0,
        Math.ceil(this.revenues.length / 2),
        this.cityLeft
      );
      this.getData(
        Math.ceil(this.revenues.length / 2),
        this.revenues.length,
        this.cityRight
      );
    }
  }
};
</script>

<style scoped>
.about {
  position: absolute;
  width: 100%;
  top: 320px;
  height: 290px;
  left: 52px;
}

/* .title {
  position: absolute;
  top: 320px;
  left: 42px;
  color: aliceblue;
  width: 640px;
  height: 32px;
  background: #00ffff;
} */
.left {
  position: absolute;
  left: 140px;
  /* top: 50px; */
}
.right {
  position: absolute;
  right: 60px;
  /* top: 50px; */
}
</style>
