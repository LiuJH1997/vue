import Vue from 'vue'


let vm = new  Vue({
  el:'#app',
  data:{
    a:0,
    b:0,
    firstName:'Herry',
    lastName:'Lee',
    fullName:'Herry Lee'
  },
  //实例被创建 一般用于做ajax请求
  created(){

  },
  //DOM元素被挂载
  mounted(){

  },
  //方法
  methods:{
    total(){
      return (this.a + this.b).toFixed(2);
    }
  },
 //过滤
  filters:{

  },
  //计算属性
  computed:{
    newFullName:{
      //setter 设置
      set(val){
        // JOCY Guo
        let names = val.split(' ');
        this.firstName = names[0];
        this.lastName  = names[1];
      },
      //getter 获取
      get(){
        return this.firstName + '' + this.lastName;
      }
    },
    sum(){
      return (this.a + this.b).toFixed(2);
    },
    getFullName(){
      return this.firstName + '' + this.lastName;
    }
  },
  //侦听
  watch:{
    //val是一个新值
    firstName(val){
      this.fullName = val + '' + this.lastName;
    },
    lastName(val){
      this.fullName = this.firstName+ '' + val;
    }
  }
 
})