<template>
    <div class="tabBar">
    <!-- 游标 -->
    <div class="cursor" :style="{'left':this.$store.state.left}"></div>
    <!-- 菜单项 -->
    <ul class="tabBar-list">
        <li class="item" v-for="(link,index) in links" :key="index">
            <Icon class="icon" :type="types[index]" size="25" color="white"></Icon>
            <router-link :to="link.href">{{link.title}}</router-link>
        </li>
       
    </ul>
    </div>
    
</template>

<script>
    export default{
        name:'Navlist',
        data(){          
            return{
                types: [
                'ios-home',
                'ios-search-strong',
                'ios-cart',
                'ios-person'
            ],

                links:[
                    {
                        title:'主页',
                        href:'/'
                    },
                    {
                        title:'搜索',
                        href:'/search'
                    },
                    {
                        title:'购物车',
                        href:'/shopping'
                    },
                    {
                        title:'我的',
                        href:'/mine'
                    }
                  
                ]
            }
        }
    }
</script>
<style>
.tabBar{
    position: relative;
    background: rgb(128, 204, 128);
}
.cursor{
    width: 25%;
    height: 49px;
    transition: all .25s linear;
    position: absolute;
    top: 0;
    background: rgb(13, 165, 13);

}
.tabBar .tabBar-list{
    height: 49px;
}
.tabBar-list .item{
    width: 25%;
    height: 100%;
    float: left;
    background: transparent;
    color: white;
    cursor: pointer;
    position: relative;
    
}
.tabBar-list .item a{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: white;
    font-size: 11px;
    position: relative;
    z-index: 1;
}
.tabBar-list .item .icon{
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translateX(-50%);
}
</style>

