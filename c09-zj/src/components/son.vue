<template>
    <div class="title">
        儿子--{{msg}}
         <p>{{num + 10}}</p>
        <p>{{getBorn}}</p>

        <button type="button" @click="sendMsg">子发送数据</button>
    </div>
</template>

<script>
 export default {
    name:'Son' ,
    computed:{
        getBorn(){
            let year = this.birth.slice(6,10);
            let month = this.birth.slice(10,12);
            let day = this.birth.slice(12,14);
            return `出生日期:${year}年${month}月${day}日`
        }
    } ,
    //接受数据
    //["msg",'birth','num']
    props:{
        msg:String,
        birth:{
            //限制数据类型
            type:[String,Number],
            //必须实现
            required:true
        },
        num:{
            type:Number,
            //默认值
            default:50
        }
    },
    data(){
    return {
        str:"我是子组件中发送的数据"
        }   
    },
    methods:{
        sendMsg(){
            //子组件向父组件发送数据
            this.$emit("send",this.str);
        }
    }
    
 }   

</script>

<style>

</style>
