<template>
    <div class="content">
       <ul class="l-menu">
           <li><router-link :to="links.html">HTML</router-link></li>
           <li><router-link :to="links.css">CSS</router-link></li>
           <li><router-link :to="links.js">JS</router-link></li>
       </ul>
       <router-view/>
    </div>
</template>
<script>
    export default{
        name:'',
        data(){
            return{
               links:{
                html:'/course/html',
                css:'/course/css',
                js:'/course/js'
               }
            }
        }
    }
</script>

<style scoped>
.content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.l-menu{
    width: 20%;
     height: 300px;
    background: rgb(228, 226, 127);
}
.r-content{
    width: 80%;
    height: 300px;
    background: rgb(127, 228, 127);
}
</style>
