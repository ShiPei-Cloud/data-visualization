<template>
  <div class="changming">
    <div class="zhihang" @click="zhihangClick(router,'长宁支行')"></div>

  </div>
</template>
<script>
export default {
  name: "ChangNing",
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
.changming {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/长宁.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;
    width: 154px;
    height: 70px;
   top: 255px;
    left: 353px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/长宁.png")
      no-repeat;
    background-size: contain;
  }
}
</style>