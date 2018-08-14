<template>
   <div class="container">
        <Navigationbar/>
        <div class="content">
            我的
        </div>
        <Navlist/>
   </div>
</template>
<script>
import Navlist from '../components/navlist'
import Navigationbar from '../components/navigationbar'
    export default{
        name:'Mine',
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
