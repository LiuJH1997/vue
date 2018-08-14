<template>
    <div class="content">
        <p>
        <button type="button" @click="isShow = !isShow">CLICK ME</button>
        </p>
       
       <transition name="slide">
       <h1 v-show="isShow">hello,world</h1>
       </transition>
    </div>
</template>

<script>
    export default{
        name:'Transition',
        data(){
            return{
                isShow:true
            }
        }
    }
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all .5s linear;
}
.slide-leave,
.slide-enter-to{
    transform: translate(0)
}
.slide-leave-to,
.slide-enter{
    transform: translate(200px)
}

</style>

