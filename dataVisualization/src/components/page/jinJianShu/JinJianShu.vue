<template>
  <div class="cate">

    <Title text='年累计进件数 Years Accumulative'></Title>
    <JinJianShuItem v-for="(item,index) in city" :key="item.area" :city='item.area' :height='item.purchases'
      :index='index' class="his">
    </JinJianShuItem>
  </div>
</template>
<script>
import JinJianShuItem from "@/components/page/jinJianShu/jinJianShuCom/JinJianShuItem";
import Title from "@/components/page/title/Title";
export default {
  name: "JinJianShu",
  data() {
    return {
      city: []
    };
  },
  props: {
    YearsAccumulative: {
      type: Array,
      default: []
    }
  },
  components: {
    JinJianShuItem,
    Title
  },
  methods: {
    getData() {
      this.YearsAccumulative.forEach((item, index) => {
        if (item.bank == null) {
          this.city.push({
            area: item.area.replace(/(^\s*)|(\s*$)/g, ""),
            purchases: Number(item.purchases)
          });
        } else {
          this.city.push({
            area: item.bank.replace(/(^\s*)|(\s*$)/g, ""),
            purchases: Number(item.purchases)
          });
        }
      });
    }
  },
  watch: {
    YearsAccumulative(newVal, oldVal) {
      this.YearsAccumulative = newVal;
      this.city = [];
      this.getData();
    }
  }
};
</script>
<style scoped>
.cate {
  position: absolute;
  top: 25px;
  width: 640px;
  height: 340px;
  display: flex;
  /* justify-content: center; */
    justify-content: space-around;
  align-items: center;
  
}

/* .title {
  position: absolute;
  top: -80px;
  left: -16px;
  color: aliceblue;
  width: 640px;
  height: 32px;
  background: #00ffff;
} */
.his {
  /* flex: 1; */
}
</style>