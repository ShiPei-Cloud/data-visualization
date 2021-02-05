<template>
  <div class="qingPu">
    <div class="zhihang" @click="zhihangClick(router,'长三角一体化示范区支行')"></div>
  </div>
</template>
<script>
export default {
  name: "QingPu",
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
       this.$axios.get(' http://192.168.1.136:8060/42floor/area?bank='+name).then( res => {
        //  console.log(res.data)
          this.$emit("getData", res.data);
       })
       
      } else {
        console.log(name + "青浦支行");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.qingPu {
  position: absolute;
  width: 600px;
  height: 600px;
  // left: 100px;
  // top: 20px;
  background: url("../../assets/img/components/EnterpriseData/maps/青浦.png")
    no-repeat;
  background-size: 100%100%;
  .zhihang {
    position: absolute;
    top: 244px;
    left: 200px;
    width: 180px;
    height: 70px;
    background: url("../../assets/img/components/EnterpriseData/zhihang/青浦长三角.png")
      no-repeat;
    background-size: contain;
  }
}
</style>