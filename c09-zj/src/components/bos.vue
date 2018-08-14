<template>
    <div>
        老板
        <worker>
            <!-- vue中的 P标签不支持嵌套 -->
           <div slot="s1">我是插槽1
               <h3>我是插槽1的内容</h3>
           </div>
           <p slot="s2">我是插槽2</p>
           <!-- <button slot="s3">SHOWMI</button> -->
        </worker>   
    </div>
</template>

<script>
import Worker from './worker'
    export default{
        name: 'Bos',
        data() {
            return {

            }
        },
        components:{Worker}
    }
</script>
<style>

</style>
