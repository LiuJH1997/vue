<template>
    <ul class="menu-list">
        <li v-for="(title ,index) in menus" :key='index' :data-page='title' @click="menuBtnClick">
            {{title | uppercase}}
        </li>
    </ul>
</template>

<script>
export default {
    name:'MenuNav',
    filters:{
        uppercase(val){
            return val.toUpperCase()
        }
    },
    methods:{
        menuBtnClick(e){
            //切换 -》data-page
            let page = e.target.dataset.page;
            this.$emit('menuClick',page)
            console.log(e.target);
        }
    },
    data(){
        return{
            menus:["Home",'Menu','My']
        }
    }
}
</script>
<style scoped>
    
</style>
