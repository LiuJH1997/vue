<template>
     <div class="container">
        <Navigationbar/>
        <div class="content">
            购物车
        </div>
        <Navlist/>
   </div>
</template>
<script>
import Navlist from '../components/navlist'
import Navigationbar from '../components/navigationbar'
    export default{
        name:'Shopping',
        data(){
            return{

            }
        },
         components:{
        Navlist,
        Navigationbar
     },
    }
</script>
