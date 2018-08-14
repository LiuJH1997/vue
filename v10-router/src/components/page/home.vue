<template>
    <div class="content">
        主页
    </div>
</template>
<script>
    export default{
        name:'',
        data(){
            return{

            }
        },
    beforeRouteEnter (to, from, next) {
    // console.log(`进入:${to.name}页面`);
    console.log(`进入主页页面`);
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log(`离开:${to.name}页面`);
    next();
  },
    }
</script>

<style>

</style>

