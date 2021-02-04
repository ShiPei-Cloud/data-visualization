<template>
  <div class="jingAn">
    <div class="zhihang zhihang1" @click="zhihangClick(router,'静安支行')"></div>
    <div class="zhihang zhihang2" @click="zhihangClick(router,'第六支行')"></div>
  </div>
</template>
<script>
export default {
  name: "JingAn",
  data() {
    return {
      router: ""
    };
  },
  mounted() {
    this.router = this.$route.path;
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
        console.log(name + "静安支行");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.jingAn {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/静安.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;
    width: 154px;
    height: 70px;
  }

  .zhihang1 {
    top: 416px;
    left: 263px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/jinan.png")
      no-repeat;
    background-size: contain;
  }

  .zhihang2 {
    top: 324px;
    left: 312px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/diliu.png")
      no-repeat;
    background-size: contain;
  }
}
</style>