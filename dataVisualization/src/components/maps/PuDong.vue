<template>
  <div class="pudong">
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
  name: "PuDong",
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
.pudong {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/浦东.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;

    width: 154px;
    height: 70px;

    background-size: contain;
  }

  .zhihang1 {
        top: 81px;
    left: 181px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/浦东自贸区.png")
      no-repeat;
  }

  .zhihang2 {
        top: 156px;
    left: 226px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/浦东市.png")
      no-repeat;
  }

  .zhihang3 {
    top: 160px;
    left: 133px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/浦东.png")
      no-repeat;
  }

  .zhihang4 {
  top: 231px;
    left: 272px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/浦东张江.png")
      no-repeat;
  }

  .zhihang5 {
   top: 430px;
    left: 333px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/浦东自贸新片区.png")
      no-repeat;
  }
}
</style>