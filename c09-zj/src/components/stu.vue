<template>
    <input type="text" v-model.number="num">
</template>

<script>
    export default{
        name:'stu',
        methods:{
            cal(){
                return this.num + 10;
            }
        },
        props:{
            num:{
                type:Number,
            }
        }
    }
</script>
<style>

</style>
