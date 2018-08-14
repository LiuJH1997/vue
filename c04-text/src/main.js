import Vue from 'vue'

let model = {
  fruits:'',
  keywords:'',
  stus:[
    {name:'张三',gender:'男',address:'四川省成都市'},
    {name:'李四',gender:'女',address:'四川省成都市'},
    {name:'王五',gender:'男',address:'四川省成都市'},
    {name:'王一',gender:'男',address:'四川省成都市'},
    {name:'王二',gender:'男',address:'四川省成都市'},
    {name:'王三',gender:'男',address:'四川省成都市'}
  ],
  infos:{
    name:'orgin',
    age:'16',
    address:'四川省成都市',
    school:'成都大学',
    job:'web前端工程师'
  },
  fruit:['葡萄','橙子','苹果'],
  goods:[
    {name:'商品1',price:134},
    {name:'商品2',price:343},
    {name:'商品3',price:345.445},
    {name:'商品4',price:765},
    {name:'商品5',price:234},
    {name:'商品6',price:45}
  ]
}
let vm = new  Vue({
  el:'#app',
  data:model,
 
  filters:{
    addSymble(val){
      return '￥' + val;
    }
  },
  methods:{
    //添加
    add(){
      if(this.fruits){
        this.fruit.push(this.fruits);
      }
    },
    //删除
    remove(){
      this.fruit.pop();
    },
    //修改
    // modify(){
    //   // this.fruit[0] = "榴莲";
    //   this.$set(this.fruit,0,"榴莲");
    // },
    //过滤数据
    filterArr(){
      console.log("**");
      console.log(this.$data.stus);
      return this.stus.filter((stu) => {
        let reg = new RegExp(this.keywords);
        return reg.test(stu.name);
      })
    }
  }
})