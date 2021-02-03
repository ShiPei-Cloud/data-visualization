<template>
    <div class="baoShan">
        <div class="zhihang" @click="zhihangClick(router,'宝山支行')"></div>
    </div>
</template>
<script>
export default {
    name:'BaoShan',
    data() {
        return {
            router:""
        }
    },
    mounted() {
        this.router = this.$route.path;
    },
    methods: {
        zhihangClick(e,name){
            if(e === '/data'){
                console.log(name + '-data');
            }
            else{
                console.log(name + '宝山支行');
            }
        }
    },
}
</script>
<style lang="less" scoped>
    .baoShan{
        position: absolute;
        width: 600px;
        height: 600px;
        background: url("../../assets/img/components/EnterpriseData/maps/宝山.png") no-repeat;
        background-size: 100%100%;

        .zhihang{
            position: absolute;
            width: 132px;
            height: 70px;
            left: 189px;
            top: 184px;
            background: url("../../assets/img/components/EnterpriseData/zhihang/baogangbaoshan.png") no-repeat;
            background-size: 100%100%;
        }
    }
</style>