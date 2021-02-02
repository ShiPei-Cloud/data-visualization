<template>
    <div class="circleData"
         style="circleStyle"
    >
    {{dataName}}
    </div>
</template>
<script>
export default {
    name:'CircleData',
    props:{
        dataName:{
            type:String,
            default:"未命名模块"
        }
    }
}
</script>
<style lang="less" scope>
    .circleData{
        position: absolute;
        width: 50px;
        height: 50px;
        // background-color: chartreuse;
        border: 2px #00D0FF solid;
        border-radius: 50%;
        box-shadow: 0px 0px 10px #00D0FF inset,0px 0px 10px #00D0FF; 
        font-size: 18px;
        text-align: center;
        font-weight: 700;
    }
</style>