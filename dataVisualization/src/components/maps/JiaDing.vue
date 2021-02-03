

<template>
  <div class="jiading">
    <div class="zhihang" @click="zhihangClick(router,'嘉定支行')"></div>
  </div>
</template>
<script>
export default {
  name: "JiaDing",
  data() {
    return {
      router: ""
    };
  },
  mounted() {
    this.router = this.$route.path;
    console.log(this.router);
  },
  methods: {
    zhihangClick(e, name) {
      if (e === "/data") {
        console.log(name + "-data");
      } else {
        console.log(name + "青浦支行");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.jiading {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/嘉定.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;
    top: 299px;
    left: 432px;
    width: 180px;
    height: 70px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/嘉定.png")
      no-repeat;
    background-size: contain;
  }
}
</style>