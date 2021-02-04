<template>
  <div class="minhang">
    <div class="zhihang" @click="zhihangClick(router,'闵行支行')"></div>

  </div>
</template>
<script>
export default {
  name: "MinHang",
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
.minhang {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/闵行.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;
    width: 154px;
    height: 70px;
  top: 248px;
    left: 256px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/闵行.png")
      no-repeat;
    background-size: contain;
  }
}
</style>