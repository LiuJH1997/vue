<template>
     <div>
         <span>自定义指令：</span>
          <input type="text" v-focus>
     </div>
   
</template>
<script>
    export default{
        name:'Direc',
        directives:{
            focus:{
                inserted(el){
                    el.focus();
                    el.style.outline = 'none';
                    el.style.border = '1px solid green';
                }
            }
        },

        data(){
            return{

            }
        }
    }
</script>
<style>

</style>

