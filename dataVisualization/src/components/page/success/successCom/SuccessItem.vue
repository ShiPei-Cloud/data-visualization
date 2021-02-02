<template>
  <div class="table">
    <div class="table_item" :style="table_item_style">
      <div class="table_item_one" :style="table_item_one_style">
        <div class="table_item_content" :style="table_item_content_style"></div>
      </div>
    </div>
    <div class="table_text" :style="table_text_style">{{city}}</div>
  </div>
</template>
<script>
export default {
  name: "SuccessItem",
  data() {
    return {
      table_item_one_style: { width: 0 },
      table_item_style: {},
      table_text_style: {},




      table_item_content_style: {}
    };
  },
  props: {
    widthL: {
      type: Number,
      default: 100
    },
    position: {
      type: Number,
      default: 1
    },
    background: {
      type: String,
      default: "linear-gradient(-90deg, #4A66ED 0%, #00CBD8 99%)"
    },
    city: {
      type: String,
      default: "浦东新区"
    }
  },
  mounted() {
    this.table_item_one_style.width = this.widthPre;
    this.table_item_content_style.background = this.background;
    if (this.position === 1) {
      this.table_item_style.left = "80px";
      this.table_text_style.right = "-80px";
      this.table_item_one_style.right = 0;
      this.table_item_content_style.right = 0;
    } else {
      this.table_item_style.right = "80px";
      this.table_text_style.left = "-80px";
      this.table_item_one_style.left = 0;
      this.table_item_content_style.left = 0;
    }
  },
  computed: {
    widthPre() {
      return (this.widthL * 100) / (this.widthL + 200) + "%";
    }
  },
  watch: {
    widthPre() {
      this.table_item_one_style.width = this.widthPre;
      // this.table_item_content_style.background = this.background;
    }
  }
};
</script>
<style scoped>
.table {
  position: relative;
  width: 240px;
  height: 26px;
  top: 77px;

  /* background: blue; */
}

@keyframes mymove {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
.table_item {
  border-radius: 50px;
  position: absolute;
  top: 0;
  /* left: 0; */
  width: 60%;
  height: 6px;
  background: red;
  background-size: 60%;
  background: url("../../../../assets/dataImage/border.png") center no-repeat;
}

/* transition: width 2s；实现数据更新后的动态效果，并且元素的宽度要有变化（%1-%10），如果一直是100%，则不起效果 */
.table_item_one {
  position: absolute;
  border-radius: 50px;
  top: 0;
  /* right: 0; */
  /* background: green; */
  transition: width 2s;
  height: 100%;
}
.table_item_content {
  position: absolute;
  border-radius: 50px;
  top: 0;
  /* right: 0; */

  height: 100%;
  width: 100%;
  /* transition-duration: 2s; */

  /* transition-property: width; */
  /* transition: transform 0.3s, box-shadow 0.3s; */
  /* transition: width 2s; */
  /* transform: all 2s linear; */
  /* animation: mymove 2s linear; */
  /* transition: background-color 3s ease; */
}
.table_text {
  position: absolute;
  border-radius: 50px;
  top: -10px;
  /* font-family: MicrosoftYaHei; */
  /* right: 0; */
  width: 40%;
  height: 100%;
  color: #00a9ff;
  line-height: 26px;
  /* background: black; */
  text-align: center;
}
</style>