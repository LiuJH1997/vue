import Vue from 'vue'
import store  from '@/store'
import Router from 'vue-router'
import Home from '@/page/home'
import Search from '@/page/search'
import Shopping from '@/page/shopping'
import Mine from '@/page/mine'
import Details from '@/page/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','主页');
        store.commit('changeLeft',"0%");
        next();
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','搜索');
        store.commit('changeLeft',"25%");
        next();
      }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','购物车');
        store.commit('changeLeft',"50%");
        next();
      }
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','我的');
        store.commit('changeLeft',"75%");
        next();
      }
    },
    {
      path: '/details/:msg',
      name: 'details',
      component: Details,
      beforeEnter:(to,form,next) => {
        store.commit('changeTitle','详情页');
        next();
      }
    }
  ]
})

// router.beforeEach((to,from,next) => {
//   // 
//   switch(to.name){
//     case 'home':{
//         store.commit('changeTitle','主页')
//     }break;
//     case 'search':{
//             store.commit('changeTitle','搜索')
//     }break;
//     case 'shopping':{
//         store.commit('changeTitle','购物车')
//     }break;
//     case 'mine':{
//         store.commit('changeTitle','我的')
//     }
//     }
//   next();
// })
// export default router;
