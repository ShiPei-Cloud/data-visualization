<template>
  <div class="huangpu">
    <div class="zhihang zhihang1" @click="zhihangClick(router,'第一支行')"></div>
    <div class="zhihang zhihang2" @click="zhihangClick(router,'第二支行')"></div>
    <div class="zhihang zhihang3" @click="zhihangClick(router,'第三支行')"></div>
    <div class="zhihang zhihang4" @click="zhihangClick(router,'第四支行')"></div>
    <div class="zhihang zhihang5" @click="zhihangClick(router,'第五支行')"></div>
    <div class="zhihang zhihang6" @click="zhihangClick(router,'营业部')"></div>
    <div class="zhihang zhihang7" @click="zhihangClick(router,'黄浦支行')"></div>
  </div>
</template>
<script>
export default {
  name: "HuangPu",
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
        this.$axios
          .get(" http://192.168.1.136:8060/42floor/area?bank=" + name)
          .then(res => {
            //  console.log(res.data)
            this.$emit("getData", res.data);
          });
      } else {
        console.log(name + "青浦支行");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.huangpu {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/黄浦.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;

    width: 100px;
    height: 70px;

    background-size: contain;
  }

  .zhihang1 {
    top: 53px;
    left: 292px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/黄浦第四.png")
      no-repeat;
  }

  .zhihang2 {
    top: 132px;
    left: 334px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/黄浦第五.png")
      no-repeat;
  }

  .zhihang3 {
    top: 160px;
    left: 244px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/黄浦支行.png")
      no-repeat;
  }

  .zhihang4 {
    top: 216px;
    left: 167px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/黄浦营业部.png")
      no-repeat;
  }

  .zhihang5 {
    top: 233px;
    left: 391px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/黄浦第三.png")
      no-repeat;
  }

  .zhihang6 {
    top: 258px;
    left: 285px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/黄浦第二.png")
      no-repeat;
  }

  .zhihang7 {
    top: 379px;
    left: 260px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/黄浦第一.png")
      no-repeat;
  }
}
</style>