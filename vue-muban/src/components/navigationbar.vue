<template>
    <div class="navigationbar">
        <!-- 返回按钮 -->
        <Icon class="goback-btn" v-if="goback" type="chevron-left" @click="gobackClick"></Icon>
        <h2 class="title">{{this.$store.state.title}}</h2>
    </div>
</template>
<script>
    export default{
        name:'Navigationbar',
        methods:{
            //返回上一页
            gobackClick(){
                this.$router.go(-1);
            }
        },
        props:{
            goback:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
            }
        }
    }
</script>
<style scoped>
.navigationbar{
    height: 64px;
    background: rgb(144, 220, 144);
    color: white;
    text-align: center;
    line-height: 64px;
    letter-spacing: 2px;
    position: relative;
}
.goback-btn{
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
}

</style>

