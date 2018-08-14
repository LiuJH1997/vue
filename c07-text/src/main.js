import Vue from 'vue'

let vm = new Vue({
  el:'#app',
  data:{
    value:'哎呀，不错',
    checkMsg:'',
    heros:[],
    selected:''
  },
  // computed:{
  //   showVal(){
  //     return this.value;
  //   }
  // },
  watch:{
    value(val){
      console.log(val)
    }
  }
})
