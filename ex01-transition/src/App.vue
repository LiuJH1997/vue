<template>
  <div id="app">
    <ul class="menu-list">
      <li data-page="Mine" @click="btnClick">MINE</li>
      <li data-page="About" @click="btnClick">about</li>
      <li data-page="News" @click="btnClick">news</li>
    </ul>
    <div class="container">
      <transition name="slide">
      <component :is="page"></component>
      </transition>
    </div>

    <p class="button">
      <button type="button" @click="flag = !flag"> CLick me</button>
    </p>
    <transition name="custom-classes-transition"
        enter-active-class="animated rubberBand"
        leave-active-class="animated rotateOut">
    <h1 class="flag" v-show="flag">hello flag</h1>
    </transition>


    <!-- 状态动画与侦听器 -->
    <p>
      <input type="neumber" v-model.number="number">
    </p>
    <p>{{animatedNumber}}</p>
  </div>
</template>

<script>

import About from './components/about'
import Mine from './components/mine'
import News from './components/news'
export default {
  name: 'App',
  data(){
    return{
      page:'Mine',
      flag:true,
      number:0,
      twNumber:0
    }
  },
  methods:{
    btnClick(e){
      this.page = e.target.dataset.page;

    }
  },
  watch:{
    number(newval){
      TweenLite.to(this.$data,0.5,{twNumber:newval})
    }
  },
  computed:{
    animatedNumber(){
      return this.twNumber.toFixed(0);
    }
  },

  components: {
  About,
  Mine,
  News
  }
}
</script>

<style>
.button{
  margin-left: 100px;
}
.flag{
  width: 200px;
  height: 200px;
  margin-left: 100px;
}
.menu-list li{
  display: inline;
  cursor: pointer; 
}
.container{
  width: 300px;
  height: 200px;
  position: relative;
}
.content{
  width: 300px;
  height: 200px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0; 
}
/* .slide-enter-active {
    transition: all .5s linear;
}
.slide-enter-to{
    transform: translate(0)
}
.slide-enter{
    transform: translate(200px)
} */
.slide-enter-active, .slide-leave-active{
  transition: opacity .5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}
</style>
