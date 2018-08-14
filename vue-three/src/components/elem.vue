<template>
    <div class="content">
        ELEM 
        <el-carousel indicator-position="outside">
        <el-carousel-item >
            <img src="../assets/01.jpg" alt="">
        </el-carousel-item>
         <el-carousel-item >
            <img src="../assets/02.jpg" alt="">
        </el-carousel-item>
         <el-carousel-item >
            <img src="../assets/03.jpg" alt="">
        </el-carousel-item>
         <el-carousel-item >
            <img src="../assets/04.jpg" alt="">
        </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
    export default{
        name:'Elem',
        data(){
            return{

            }
        }
    }
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

