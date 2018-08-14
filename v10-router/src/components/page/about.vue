<template>
    <div class="content">
        关于
        <br/>
        {{$route.query.weather}}
        <button type="button" @click="goHome">跳转到主页</button>
    </div>
</template>
<script>
    export default{
        name:'',
        methods:{
            goHome(){
                this.$router.push('/');
            }
        },
        data(){
            return{

            }
        }
    }
</script>

<style>

</style>