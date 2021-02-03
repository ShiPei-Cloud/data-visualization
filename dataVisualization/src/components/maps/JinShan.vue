<template>
    <div class="jinShan">
        <div class="zhihang" @click="zhihangClick(router,'金山支行')"></div>
    </div>
</template>
<script>
export default {
    name:'JinShan',
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
                console.log(name + '金山支行');
            }
        }
    },
}
</script>
<style lang="less" scoped>
    .jinShan{
        position: absolute;
        width: 800px;
        height: 800px;
        background: url(../../assets/img/components/EnterpriseData/maps/金山.png) no-repeat;
        background-size: 100%100%;

        .zhihang{
            position: absolute;
            width: 87px;
            height: 70px;
            left: 536px;
            top: 531px;
            background: url(../../assets/img/components/EnterpriseData/zhihang/jinshan.png) no-repeat;
            background: contain;
        }
    }
</style>