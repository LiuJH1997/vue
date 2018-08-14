<template>
    <div class="content">
        ECHART 
        <div id="mychart"></div>
    </div>
</template>
<script>
    export default{
        name:'Echart',
        data(){
            return{
               datalistx: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
               datalisty:[30, 40, 28, 60, 21, 55, 80]
            }
        },
        mounted(){
            this.drawLine();
        },
        methods:{
            drawLine(){
            let myChart = this.$echarts.init(document.getElementById('mychart'))
            myChart.setOption({
                title: {
                text: "Echarts 入门示例",
                subtext: "模拟数据，仅供参考"
            },
            tooltip: {
                trigger: "axis",
            },
            legend: {
                data: ["消费数据"]
            },
            xAxis: {
                data: this.datalistx
            },
            yAxis: {},
            series: [
                {
                name: "消费数据",
                type: "bar",
                data: this.datalisty
                }
                ]
            })  
        }
    }
}
</script>
<style>
#mychart{
    width: 500px;
    height: 500px;
}
</style>

