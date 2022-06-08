<template>
  <div class="container">
    <mt-header fixed :title="$route.meta.title" style="background:#c61d34">
       <span slot="left" v-show="show">
         <div class="mui-icon mui-icon-more"></div>
        
  </span>
  <span slot="left" @click="goBack" v-show="showBack">
    <mt-button icon="back">返回</mt-button>
  </span>
</mt-header>
  <transition name="fade">
     <router-view></router-view>
  </transition>
  <tabbar></tabbar>
  </div>
</template>
<script>
//引入底部导航组件
import tabbar from './components/tabbar.vue'

export default {
  data(){
    return{
      showBack:false,    //控制返回按钮显示隐藏标识
      show:true          //控制侧滑菜单
    }
  },
  created(){
    this.showBack=this.$route.path !=='/home' //初始化判断不否为首页，判断是否显示返回按钮
    this.show=this.$route.path =='/home'
  },
  watch:{
    '$route.path'(newVal){
      this.showBack=newVal !== '/home' //等于/home时，showBack为false不显示返回，否则为ture显示返回
      this.show=newVal == '/home' //等于/home时，showBack为false不显示返回，否则为ture显示返回
    }
  },
  methods:{
    goBack(){
      this.$router.go(-1)  //返回上一页面
    }
  },
  components:{
    tabbar //添加底部导航组件
  }
}
</script>
<style lang="scss" scoped>
   #app{
     font-family: "Avenir",Arial, Helvetica, sans-serif;
     -webkit-font-smoothing:antialiased;
     -moz-osx-font-smoothing:grayscale;
     text-align: center;
     color: #010b14;
     box-sizing: border-box;
   }
   .container{
     padding-top: 40px;
     padding-bottom: 50px;
    overflow: hidden;
    
   }
   .fade-enter{
     opacity: 0;
     transform: translateX(100%);
     
   }
   .fade-enter-to{
     opacity: 0;
     transform: translateX(-100%);
     position: absolute;
   }
   .fade-enter-active,
   .fade-leave-active{
     transition: all 0.5s ease;
   
   }
</style>