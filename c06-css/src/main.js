import Vue from 'vue'
import '../static/css/index.css'

let vm = new Vue({
  el:'#app',
  data:{
    class1:'box',
    class2:'radius',
    classname:'box',
    isBox:true,
    classObj:{
      'box':true,
      'radius':true
    },
    // 2. style
    radius:'30px',
    baColor:'green',
    styleObj:{
      borderRadius:'40px',
      backgroundColor:'green',
      boxSizing:'border-box',
      border:'3px solid orange',
      transform:'rotateZ(15deg)'
    }
  }
})
