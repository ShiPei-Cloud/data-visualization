<template>
  <div class="map">
    <div class="mapBtn mapBtn1" :class="active==1?'active':''" @click="change(1,'崇明区')">崇明区</div>
    <div class="mapBtn mapBtn2" :class="active==2?'active':''" @click="change(2,'宝山区')">宝山区</div>
    <div class="mapBtn mapBtn3" :class="active==3?'active':''" @click="change(3,'嘉定区')">嘉定区</div>
    <div class="mapBtn mapBtn4" :class="active==4?'active':''" @click="change(4,'金山区')">金山区</div>
    <div class="mapBtn mapBtn5" :class="active==5?'active':''" @click="change(5,'杨浦区')">杨浦区</div>
    <div class="mapBtn mapBtn6" :class="active==6?'active':''" @click="change(6,'虹口区')">虹口区</div>
    <div class="mapBtn mapBtn7" :class="active==7?'active':''" @click="change(7,'普陀区')">普陀区</div>
    <div class="mapBtn mapBtn8" :class="active==8?'active':''" @click="change(8,'青浦区')">青浦区</div>
    <div class="mapBtn mapBtn9" :class="active==9?'active':''" @click="change(9,'长宁区')">长宁区</div>
    <div class="mapBtn mapBtn10" :class="active==10?'active':''" @click="change(10,'静安区')">静安区</div>
    <div class="mapBtn mapBtn11" :class="active==11?'active':''" @click="change(11,'黄浦区')">黄浦区</div>
    <div class="mapBtn mapBtn12" :class="active==12?'active':''" @click="change(12,'浦东新区')">浦东新区</div>
    <div class="mapBtn mapBtn13" :class="active==13?'active':''" @click="change(13,'徐汇区')">徐汇区</div>
    <div class="mapBtn mapBtn14" :class="active==14?'active':''" @click="change(14,'奉贤区')">奉贤区</div>
    <div class="mapBtn mapBtn15" :class="active==15?'active':''" @click="change(15,'闵行区')">闵行区</div>
    <div class="mapBtn mapBtn16" :class="active==16?'active':''" @click="change(16,'松江区')">松江区</div>

  </div>
</template>
<script>
export default {
  name: "Map",
  data() {
    return {
      active:0
    };
  },

  methods: {
    change(index, name) {
      this.active = index;
      console.log(index);
      this.$emit("quData", name);
    }
  }
};
</script>
<style scoped>
.map {
  position: absolute;
  width: 600px;
  height: 600px;
  left: 100px;
  top: 20px;
  background: url("../../assets/dataImage/map.png") center no-repeat;
  background-size: 100% 100%;
}
.mapBtn {
  position: absolute;
  height: 20px;
  font-size: 14px;
  padding-left: 10px;
  line-height: 20px;
  color: rgba(0, 252, 232, 1);
}

/* .active {
  color: red;
} */

.mapBtn1 {
  left: 335px;
  top: 129px;
}
.mapBtn2 {
  left: 232px;
  top: 173px;
}
.mapBtn3 {
  left: 163px;
  top: 214px;
}
/* .mapBtn4 {
  left: 304px;
  top: 247px;
} */

.mapBtn5 {
  left: 298px;
  top: 227px;
}
.mapBtn6 {
  left: 265px;
  top: 252px;
}
.mapBtn7 {
  left: 205px;
  top: 287px;
}
.mapBtn8 {
  left: 108px;
  top: 318px;
}
.mapBtn9 {
  left: 188px;
  top: 313px;
}
.mapBtn10 {
  left: 256px;
  top: 314px;
}
.mapBtn11 {
  left: 305px;
  top: 305px;
}
.mapBtn12 {
  left: 384px;
  top: 338px;
}
.mapBtn13 {
  left: 264px;
  top: 357px;
}

.mapBtn15 {
  left: 231px;
  top: 388px;
}
.mapBtn16 {
  left: 155px;
  top: 392px;
}
.mapBtn14 {
  left: 324px;
  top: 432px;
}
.mapBtn4 {
  left: 194px;
  top: 474px;
}
</style>