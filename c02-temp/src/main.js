
import Vue from 'vue'
import '../static/css/index.css'

new Vue({
  el:'#app',
  data:{
    time:new Date().toLocaleTimeString(), //获取程序当前时间
    address:'四川省成都市',
    weather:'多云 24C~32C',
    htmlStr:'<h2>今天天气不错</h2>',
    imglink:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531906699633&di=ad604fa6bfc7b6a54db1a6685653fe50&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0128f758a06dd6a8012060c8938904.png',
    imgTitle:'课件课件',
    isHidden:false

  }
});