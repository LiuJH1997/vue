import Vue from 'vue'

let vm = new  Vue({
  el:'#app',
  data:{
    isLogin:false,
    loginType:'tel'
  },
  //用于自定义方法
  methods:{
    toggleLoginType(){
      this.loginType = this.loginType == 'tel' ? 'email' : 'tel';
    }
  }
})