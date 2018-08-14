// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import {
  Button,
  carousel,
  carouselItem
} from 'element-ui';
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(Button)
Vue.use(carousel)
Vue.use(carouselItem)
Vue.prototype.$echarts = echarts



Vue.config.productionTip = false

// Vue.component('Hello',{
//   template:'<p>hello,directive</p>'
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
