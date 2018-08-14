<template>
    <div>
        父亲:{{str}}
        <input type="text" v-model="temp">
        <button type="button" @click="send">发送数据</button>
        <Son @send="send" msg='儿子 我是你爸爸。' :birth="birth"
            :num = "num * 1"/> 
            <!--num * 1:利用数值自动转换-->
    </div>
</template>

<script>
import Son from './Son'
export default {
    name:'Parent' ,
   components:{
       Son
   },
   methods:{
       send(){
           this.birth = this.temp;
       },
       getStr(data){
           this.str = data;
           console.log(data);
       }
   },
    data(){
    return{
        birth:'',
        temp:'',
        num:'10'
    } 
}
}
</script>


<style>

</style>
