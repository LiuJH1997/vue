
<template>
   <ul class="menu-list">
        <li>
          <router-link exact :to="links.home">主页</router-link>
        </li>
        <li>
          <router-link :to="links.course">课程</router-link>
        </li>
         <li>
          <!-- <router-link :to="links.about">关于</router-link> -->
          <router-link :to="{path:links.about,query:{weather:'成都-26C~33C'}}">关于</router-link>
        </li>
        <li>
          <!-- <router-link to="/news/orange/16/前端工程师/">新闻</router-link> -->
          <!-- 注意：使用path会忽略params参数 -->
          <router-link :to="{name:'news',params:{name:'oraign',age:16,job:'工程师'}}">新闻</router-link>
        </li>
      </ul>
</template>
<script>
    export default{
        name:'MenuNav',
        data(){
            return{
                links:{
                    home:'/',
                    course:'/course',
                    about:'/about',
                    news:'/news'
                }
            }
        }
    }
</script>

<style scoped>
.menu-list{
    background: orange;
}
.menu-list li{
    display:inline-block;
    margin: 0 18px;
}
.menu-list li a{
    color: white;
}
</style>