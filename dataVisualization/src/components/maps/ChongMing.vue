<template>
  <div class="chongming">
    <div class="zhihang" @click="zhihangClick(router,'崇明支行')"></div>
  </div>
</template>
<script>
export default {
  name: "ChongMing",
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
.chongming {
  position: absolute;
  width: 600px;
  height: 600px;
  // left: 100px;
  // top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/崇明.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;
    top: 215px;
    left: 198px;
    width: 100px;
    height: 70px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/崇明.png")
      no-repeat;
    background-size: contain;
  }
}
</style>