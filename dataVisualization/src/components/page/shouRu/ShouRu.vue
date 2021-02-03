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

      cityLeft: [],
      cityRight: []
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
            revenue: Number(this.revenues[i].revenue)
          });
        } else {
          arr.push({
            area: this.revenues[i].bank,
            revenue: Number(this.revenues[i].revenue)
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
      this.getData(0, Math.ceil(this.revenues.length / 2), this.cityLeft);
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
