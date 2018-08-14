import Vue from 'vue'
import Router from 'vue-router'
import Direc from '@/components/direc'
import Elem from '@/components/elem'
import Swiper from '@/components/swiper'
import Lazy from '@/components/lazy'
import Echart from '@/components/echart'
import Iview from '@/components/iview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'direc',
      component: Direc
    },
    {
      path: '/elem',
      name: 'elem',
      component: Elem
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },
    {
      path: '/lazy',
      name: 'lazy',
      component: Lazy
    },
    {
      path: '/echart',
      name: 'echart',
      component: Echart
    },
    {
      path: '/iview',
      name: 'iview',
      component: Iview
    }
  ]
})
