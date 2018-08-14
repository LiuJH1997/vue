<template>
   <div class="container">
        <Navigationbar :goback="true"/>
        <div class="content">
            {{val}}
        </div>
   </div>
</template>
<script>
import Navlist from '../components/navlist'
import Navigationbar from '../components/navigationbar'
    export default{
        name:'Details',
        data(){
            return{
               val:this.$route.params.msg
            }
        },
        components:{
        Navlist,
        Navigationbar
     }
    }
</script>
