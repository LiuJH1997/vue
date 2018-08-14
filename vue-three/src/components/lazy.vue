<template>
    <div class="content">
        LAZY 
       <img v-lazy="imgObj"/> 
    </div>
</template>
<script>
    export default{
        name:'Lazy',
        data(){
            return{
                imgObj: {
                src:'http://img.zcool.cn/community/01607759831b3ea80121560385f9a8.png',
                error: require('../assets/error.jpg'),
                loading: require('../assets/loading.jpg')
            }
            }
        }
    }
</script>
<style>

</style>

