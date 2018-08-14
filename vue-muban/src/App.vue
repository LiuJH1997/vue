<template>
  <div id="app">
    <!-- 头部 -->
     <router-view/>
   
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
    }
  }
}
</script>

<style>
#app{
  width: 100%;
  height: 100%;
  font-size: 15px;
}
.container{
  width: 100%;
  height: 100%;
}
.content{
  height: calc(100% - 49px - 64px);
  overflow: scroll;
}
</style>
