<template>
  <div class="click">
    <!-- <div class="title">点选成功率</div> -->
    <Title text='点选成功率 Click Success Rate'></Title>
    <ClickItem :ClickSuccessRate1='ClickSuccessRate1'></ClickItem>
  </div>
  
</template>
<script>
import ClickItem from "@/components/page/click/clickCom/ClickItem";
import Title from "@/components/page/title/Title";
export default {
  name: "Click",
  data() {
    return {};
  },
  props: {
    ClickSuccessRate1: {
      type: Array,
      default: []
    }
  },
  components: {
    ClickItem,
    Title
  },
  watch: {
    ClickSuccessRate1(newVal, oldVal) {
      this.ClickSuccessRate1 = newVal;
    }
  }
};
</script>
<style scoped>
.click {
  position: absolute;
  top: 25px;
  width: 640px;
  height: 320px;
  left: 52px;
}
</style>