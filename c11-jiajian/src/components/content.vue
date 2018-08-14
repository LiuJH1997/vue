<template>
    <div class="content-box">
        <span class="content-btn">-</span>
        <input type="number" class="content-input" v-model="val">
        <span class="content-btn">+</span>
    </div>
</template>

<script>
export default {
    name:"Content",
    data(){
        return{

        }
    }
    
}
</script>

<style scoped>
.content-box{
    width: 200px;
    height: 35px;
}
.content-btn{
    display: inline-block;
    width: 20%;
    height: 35px;
    background: #eee;

}
.content-input{
    text-align: center;
    width: 40%;

}
</style>


