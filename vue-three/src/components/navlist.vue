<template>
    <ul class="menu-list">
         <li v-for="(link,index) in links" :key="index">
             <router-link :to="link.url">{{link.title}}</router-link>
        </li>
    </ul>
</template>
<script>
    export default{
        name:'Navlist',
        data(){
            return{
                links:[
                    {
                        title:'direc',
                        url:'/'
                    },
                    {
                        title:'elem',
                        url:'/elem'
                    },
                    {
                        title:'swiper',
                        url:'/swiper'
                    },
                    {
                        title:'lazy',
                        url:'/lazy'
                    },
                    {
                        title:'echart',
                        url:'/echart'
                    },
                    {
                        title:'iview',
                        url:'/iview'
                    }
                ]
            }

        }
    }
</script>
<style scoped>
.menu-list{
    list-style: none;
}
.menu-list li {
    display: inline-block;
    margin: 0 20px;
}
.menu-list li a {
    text-decoration: none;
    color: rgb(12, 94, 148);
}
</style>

