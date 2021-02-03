<template>
    <div class="jingAn">
        <div class="zhihang" @click="zhihangClick(router,'静安支行')"></div>
        <div class="zhihang" @click="zhihangClick(router,'第六支行')"></div>
    </div>
</template>
<script>
export default {
    name:'JingAn',
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
                console.log(name + '静安支行');
            }
        }
    },
}
</script>
<style lang="less" scoped>
    .jinShan{
        position: absolute;
        width: 600px;
        height: 600px;
        background: url(../../assets/img/components/EnterpriseData/maps/静安.png) no-repeat;
        background-size: 100%100%;

        .zhihang:nth-child(1){
            position: absolute;
            width: 87px;
            height: 70px;
            background: url(../../assets/img/components/EnterpriseData/zhihang/jinan.png) no-repeat;
            background: contain;
        }

        .zhihang:nth-child(2){
            position: absolute;
            width: 87px;
            height: 70px;
            background: url(../../assets/img/components/EnterpriseData/zhihang/diliu.png) no-repeat;
            background: contain;
        }
    }
</style>