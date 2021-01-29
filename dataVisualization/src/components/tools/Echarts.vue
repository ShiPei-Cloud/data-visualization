<template>
    <div class="echarts">
        <z-chart :style="echartStyle"
                 :options="orgOptions"
                 :auto-resize="true"
        ></z-chart>
    </div>
</template>

<script>
import * as zCharts from 'echarts/lib/echarts';
    export default {
        name: "Echarts",
        components:{zCharts},
        props:{
            chartType:{
                type:String,
                default:"line"
            },
            e_width:{ //图表的宽，默认撑满
               type:String,
               default:"100%"
            },
            e_height:{ //图表的高，默认撑满
                type:String,
                default: "100%"
            },
            showLineChartAreaShadow:{ // 是否显示折线图的面积阴影
                type:Number,
                default: 1
            },
            gridHeight:{ //图标内部的高度，如果不显示图表自带标题的，需要调高
                type:String,
                default:"60%"
            },
            pieChartConfig:{
                type:Object,
                default:function () {
                    return{
                        legend:{
                            height: '70%',
                            width:'100%',
                            left: 'left',
                            top: '25%',
                        },
                        series:{
                            radius: [40, 80],
                            center: ['80%', '45%'],
                        },
                        itemStyle:{
                            borderWidth:3, //设置border的宽度有多大
                            borderColor:"#042132",
                        }
                    }
                }
            },
            dataFromFatherLine:{ // 折线图的数据 -- {key:[],value:[]}
                type:Object,
                default:function () {
                    return {};
                }
            },
            dataFromFatherBar:{
                type:Object,
                default:function () {
                    return{}
                }
            },
            dataFromFatherPie:{
                type:Object,
                default:function () {
                    return{}
                }
            },
            dataFromFatherMultLine:{
                type:Object,
                default:function () {
                    return{}
                }
            }
        },
        data(){
            return{
                echartStyle:{
                    width:this.e_width,
                    height:this.e_height
                },
                orgOptions: {},
                watchFatherData:{}
            }
        },
        methods:{
            setOption(){
                switch (this.chartType) {
                    case "line":
                        var xAxisLineData_line = this.watchFatherData.keys; //横坐标数据 -- key
                        var yAxisLineData_line = this.watchFatherData.values; //纵坐标数据 -- value
                        this.orgOptions = {
                            xAxis: {
                                type: 'category',
                                data: xAxisLineData_line,
                                axisLine:{  //坐标轴线
                                    show:true,
                                    lineStyle:{
                                        color:"#00FFFF" //轴线颜色
                                    }
                                },
                                axisLabel:{
                                    fontSize:10
                                },
                                boundaryGap:false, //坐标轴两边留白，取消可使折线图的第一个点紧贴y坐标轴
                                axisTick:{
                                    show:true, //显示刻度
                                    inside:true //刻度在内侧显示
                                },

                            },
                            yAxis: {
                                type: 'value',
                                axisLine: { //坐标轴线
                                    show:true,
                                    lineStyle:{
                                        color:"#00FFFF" //轴线颜色
                                    }
                                },
                                axisLabel:{  //坐标轴上的字体大小
                                    fontSize:10
                                },
                                splitLine:{
                                    show:true,
                                    lineStyle:{
                                        type:"dashed",
                                        color:"#FFFFFF",
                                        opacity:0.2
                                    }
                                },
                                axisTick:{
                                    show:false //不显示刻度
                                },
                                splitNumber: 3
                            },
                            grid:{
                                bottom:30,
                                height:this.gridHeight,
                                width:"85%",
                                left:"10%"
                            },
                            series: [{
                                data: yAxisLineData_line,
                                type: 'line',
                                smooth: false, //平滑
                                lineStyle:{
                                    width:3,
                                    color:"#00FFFF"
                                },
                                areaStyle:{
                                    opacity:this.showLineChartAreaShadow,
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(0,230,232,0.5)' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: 'rgba(0,0,0,0)' // 100% 处的颜色
                                        }],
                                        global: false // 缺省为 false
                                    }
                                },
                                itemStyle:{
                                    color:"#00FFFF",
                                    borderWidth:0
                                },
                            }]
                        };
                        break;
                    case "bar":
                        var xAxisLineData_bar = this.watchFatherData.keys; //横坐标数据 -- key
                        var yAxisLineData_bar = this.watchFatherData.values; //纵坐标数据 -- value
                        this.orgOptions = {
                            xAxis: {
                                type: 'category',
                                data: xAxisLineData_bar,
                                axisLine:{  //坐标轴线
                                    show:true,
                                    lineStyle:{
                                        color:"#00FFFF" //轴线颜色
                                    }
                                },
                                axisLabel:{
                                    fontSize:9,
                                    rotate:20
                                },
                                axisTick:{
                                    show:false, //显示刻度
                                }
                            },
                            yAxis: {
                                axisLine: { //坐标轴线
                                    show:true,
                                    lineStyle:{
                                        color:"#00FFFF" //轴线颜色
                                    }
                                },
                                axisLabel:{  //坐标轴上的字体大小
                                    fontSize:9
                                },
                                splitLine:{
                                    show:true,
                                    lineStyle:{
                                        type:"dashed",
                                        color:"#FFFFFF",
                                        opacity:0.2
                                    }
                                },
                                axisTick:{
                                    show:false //不显示刻度
                                },
                            },
                            series: [{
                                name: '均价',
                                type: 'bar',
                                data: yAxisLineData_bar,
                                barWidth:"25%", //柱状图每个单位的宽度
                                color:"rgba(0,255,255,0.6)", //柱状图颜色
                            }],
                            grid:{
                                bottom:50,
                                width:"97%",
                                height:"50%",
                                left:"3%"
                            },
                        };
                        break;
                    case "pie":
                        var xAxisLineData_pie = this.watchFatherData.keys; //横坐标数据 -- key
                        var yAxisLineData_pie = this.watchFatherData.values; //纵坐标数据 -- value
                        this.orgOptions = {
                            legend: {
                                height: this.pieChartConfig.legend.height,
                                width:this.pieChartConfig.legend.width,
                                left: this.pieChartConfig.legend.left,
                                top: this.pieChartConfig.legend.top,
                                orient: 'vertical',
                                data: xAxisLineData_pie,
                                textStyle:{
                                    color:"#00FFFF"
                                },
                                itemHeight:15,
                                itemWidth:15,
                                itemGap:16
                            },
                            //设置饼状图每个颜色块的颜色
                            color : [ '#FFAD00', '#00CCFF', '#017EFE', '#7F00FF', '#C8185E', '#16BD27', '#D76026' ,'#B63C3B','#483FFE','#0A8F77','#B38A74','#00FFDE','#F000FF','#FE4E01','#FE0000'],
                            toolbox: {
                                show: true,
                                feature: {
                                    mark: {show: true},
                                    dataView: {show: true, readOnly: false},
                                    magicType: {
                                        show: true,
                                        type: ['pie', 'funnel']
                                    },
                                    restore: {show: true},
                                    saveAsImage: {show: true}
                                }
                            },
                            series:[
                                {
                                    name: '半径模式',
                                    type: 'pie',
                                    radius: this.pieChartConfig.series.radius,
                                    center: this.pieChartConfig.series.center,
                                    roseType: 'radius',
                                    label: {
                                        show: false
                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        }
                                    },
                                    itemStyle:{
                                        borderWidth:this.pieChartConfig.itemStyle.borderWidth, //设置border的宽度有多大
                                        borderColor:this.pieChartConfig.itemStyle.borderColor,
                                    },
                                    data: yAxisLineData_pie
                                }],
                            grid:{
                                bottom:30,
                                width:"96%",
                                left:"3%"
                            },
                        };
                        break;
                    case "multline":
                        var xAxisLineData_multLine = this.watchFatherData.keys; //横坐标数据 -- key
                        var yAxisLineData_multLine = this.watchFatherData.values; //纵坐标数据 -- value
                        var legendLineData_multLine = this.watchFatherData.legend; //纵坐标数据 -- value
                        this.orgOptions = {
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: legendLineData_multLine,
                                textStyle: {
                                    color:"#00FFFF",
                                    fontSize:15
                                },
                                itemWidth: 35
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            toolbox: {
                                feature: {
                                    saveAsImage: {}
                                }
                            },
                            xAxis: {
                                axisLine:{  //坐标轴线
                                    show:true,
                                    lineStyle:{
                                        color:"#00FFFF" //轴线颜色
                                    }
                                },
                                axisLabel:{
                                    fontSize:9
                                },
                                axisTick:{
                                    show:true, //显示刻度
                                    inside:true
                                },
                                type: 'category',
                                boundaryGap: false,
                                data: xAxisLineData_multLine[0]
                            },
                            yAxis: {
                                type: 'value',
                                axisLine: { //坐标轴线
                                    show:true,
                                    lineStyle:{
                                        color:"#00FFFF" //轴线颜色
                                    }
                                },
                                axisLabel:{  //坐标轴上的字体大小
                                    fontSize:10
                                },
                                splitLine:{
                                    show:true,
                                    lineStyle:{
                                        type:"dashed",
                                        color:"#FFFFFF",
                                        opacity:0.2
                                    }
                                },
                                axisTick:{
                                    show:false //不显示刻度
                                },
                            },
                            series: [
                                {
                                    name: legendLineData_multLine[0],
                                    type: 'line',
                                    data: yAxisLineData_multLine[0],
                                    color:"red"
                                },
                                {
                                    name: legendLineData_multLine[1],
                                    type: 'line',
                                    data: yAxisLineData_multLine[1],
                                    color:"#00FFFF"
                                },
                                {
                                    name: legendLineData_multLine[2],
                                    type: 'line',
                                    data: yAxisLineData_multLine[2],
                                    color:"orange"
                                }
                            ]
                        };
                        break;
                }
            }
        },
        watch: {
            dataFromFatherLine: function(val) {
                this.watchFatherData = val;
                this.setOption();
            },
            dataFromFatherBar: function (val) {
                this.watchFatherData = val;
                this.setOption();
            },
            dataFromFatherPie: function (val) {
                this.watchFatherData = val;
                this.setOption();
            },
            dataFromFatherMultLine:function (val) {
                this.watchFatherData = val;
                this.setOption();
            }
        },
    }
</script>

<style scoped>

</style>