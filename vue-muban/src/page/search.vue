<template>
    <div class="container">
        <Navigationbar/>
        <div class="content">
            搜索
        </div>
        <Navlist/>
   </div>
</template>
<script>
import Navlist from '../components/navlist'
import Navigationbar from '../components/navigationbar'
    export default{
        name:'Search',
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
