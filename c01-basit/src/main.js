//引入vue
import Vue from 'vue';
import $ from 'jquery';
//2.定义model
let model = {
  message:"hello,Vue!",
  name:'',
  info:{}
}

//3.创建vue实例
let vm = new Vue({
  //挂载元素
  el:'#app',
  //挂载model
  data:model,
  //生命周期：实例被创建
  created(){
    console.log(this);
    console.log('vue,实例已经被创建');
     let _this = this
    $.ajax({
      url:'http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php',
      type:'GET',
      success(response){
      _this.info = response['banner'][2];
      }
    })
  },
  //生命周期$el  挂载 进行DOM操作
  mounted(){

  }
});
//修改model层
//vm.$data === model
vm.$data.message = 'hello,girl!';
//vm.message = 'hello,girl!'
vm.$data.name = 'liujinh';
console.log(vm.$el);
