
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/page/home.vue' //@表示src的路径
import Course from '@/components/page/course.vue'
import About from '@/components/page/about.vue'
import News from '@/components/page/news.vue'
import Html from '@/components/page/html'
import Css from '@/components/page/css'
import Js from '@/components/page/js'
import HomeCt from '@/components/page/home-ct'
import HomeCb from '@/components/page/home-cb'


Vue.use(Router)

export default new Router({
    linkActiveClass:'active',
    routes:[
      {
        path:'/',    //设置路由路径
        name:'home', //设置路由名称
        components:{
            default:Home,
            HomeCt,
            HomeCb
        }
      },
      {
        path:'/course',    //设置路由路径
        name:'course', //设置路由名称
        component:Course,
        redirect:'/course/html',  //重定向
        children:[
            {
                path:'html',
                name:'html',
                component:Html
            },
            {
                path:'css',
                name:'css',
                component:Css
            },
            {
                path:'js',
                name:'js',
                component:Js
            }
        ]
      },
      {
        path:'/about',    //设置路由路径
        name:'about', //设置路由名称
        alias:'/guanyu', //设置别名
        component:About,
        props: (route) => ({ query: route.query.q })
      },
      {
        path:'/news/:name/:age/:job',    //设置路由路径
        name:'news', //设置路由名称
       
        component:News
      }
    ]
  })