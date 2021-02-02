<template>
  <div class="about">
    <!-- <div class="title">成功量</div> -->
    <Title text='成功量  Successful Dialing' class="about_title"></Title>
    <div class="left">
      <SuccessItem v-for="item in cityLeft" :key="item.area" :city='item.area' :widthL='item.sucmount' :position='1'
        :background='item.color'></SuccessItem>
    </div>
    <div class="right">
      <SuccessItem v-for="item in cityRight" :key="item.area" :city='item.area' :widthL='item.sucmount' :position='2'
        :background='item.color'></SuccessItem>
    </div>
  </div>
</template>
<script>
import SuccessItem from "@/components/page/success/successCom/SuccessItem";
import Title from "@/components/page/title/Title";
export default {
  area: "Success",
  created() {
    // require(`../assets/css/00${this.$route.params.id}.css`);
  },
  data() {
    return {
      cityLeft: [],
      cityRight: []
    };
  },
  props: {
    SuccessfulDialing1: {
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
        // arr.push(this.SuccessfulDialing1[i]);
        if (this.SuccessfulDialing1[i].bank == null) {
          arr.push({
            area: this.SuccessfulDialing1[i].area,
            sucmount: Number(this.SuccessfulDialing1[i].sucmount)
          });
        } else {
          arr.push({
            area: this.SuccessfulDialing1[i].bank,
            sucmount: Number(this.SuccessfulDialing1[i].sucmount)
          });
        }
      }
    }
  },
  watch: {
    SuccessfulDialing1(newVal, oldVal) {
      // this.SuccessfulDialing1 = [];
      this.SuccessfulDialing1 = newVal;
      this.cityLeft = [];
      this.cityRight = [];
      // console.log(Math.ceil( this.SuccessfulDialing1));
      this.getData(
        0,
        Math.ceil(this.SuccessfulDialing1.length / 2),
        this.cityLeft
      );
      this.getData(
        Math.ceil(this.SuccessfulDialing1.length / 2),
        this.SuccessfulDialing1.length,
        this.cityRight
      );
    }
  }
};
</script>

<style scoped>
.about {
  position: absolute;
  top: 320px;
  width: 100%;
  height: 290px;
  left: 52px;
}

.left {
  position: absolute;
  left: -48px;
  /* top: 50px; */
}
.right {
  position: absolute;
  right: 48px;
  /* top: 50px; */
}
.about_title {
  width: 540px;
}
</style>
