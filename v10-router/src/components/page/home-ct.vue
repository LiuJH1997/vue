<template>
    <div class="home-menu">
        主页内容1
        <button type="button" @click="goAbout">跳转到关于页</button>
    </div>
</template>
<script>
    export default{
        name:'HomeCt',
        methods:{
            goAbout(){
                this.$router.push({
                    path:'/guanyu',
                    query:{
                        weather:'成都-阵雨-20~30'
                    }
                })
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

