<template>
  <div id="app">
    <!-- <Tea/> -->
    <MenuNav @menuClick="tab"/>
      <Parent/>
      <component :is="curPage"></component>
  </div>
</template>

<script>
import Parent  from './components/parent';
// import Tea from './components/teacher'
import Bos  from './components/bos'



//动态切换
import MenuNav from './components/mymenu/menuNav'
import Menu from './components/mymenu/menu'
import Home from './components/mymenu/home'
import My from './components/mymenu/my'
export default {
  name: 'App',
  data(){
    return{
      curPage:'Home'
    }
  },
  methods:{
   tab(data){
     this.curPage = data;
   }
  },
  components:{
    Parent,
    MenuNav,
    Menu,
    Home,
    My
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  color: red;
}
.content{
  width: 500px;
  height: 300px;
  
}
</style>
