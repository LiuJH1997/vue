<template>
    <div class="container">
        <Navigationbar/>
            <div class="content">
            <Input class="input" v-model="val" placeholder="Enter something..." clearable style="width: 200px"/>
            <Button @click="goDetails">前往详情页</Button>
            </div>
        <Navlist/>
    </div>
</template>

<script>
import Navlist from '../components/navlist'
import Navigationbar from '../components/navigationbar'
export default {
    name:'Home',
    data(){
        return{
            val:'世间安得双全法，不负如来不负卿'
        }
    },
     components:{
    Navlist,
    Navigationbar
  },
    methods:{
       goDetails(){
            this.$router.push({
                name:'details',
                params: {msg:this.val}
            })
        }

    }
}
</script>

<style scoped>
.content{
    text-align: center;
}
.input{
    display:block;
    margin: 25px auto;
}
</style>
