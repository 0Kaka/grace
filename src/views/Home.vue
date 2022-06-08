<!--首页组件-->
<template>
  <div>
    
    <!--轮播图组件-->
    <swiper :imgList="imgList" :isfull="true"></swiper>
    <!-- 九宫格 -->
    
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="{ name: 'bag'}" class="title">
          <img src="..\assets\images\menu1.png"/>
          <div class="mui-media-body">包包</div>
        </router-link>
      </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="{ name: 'ring'}" class="title">
          <img src="..\assets\images\menu2.png"/>
          <div class="mui-media-body">戒指</div>
        </router-link>
      </li>
       <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="{ name: 'category'}" class="title">
          <img src="..\assets\images\menu3.png"/>
          <div class="mui-media-body">项链</div>
        </router-link>
      </li> 
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="{ name: 'message'}" class="title">
          <img src="..\assets\images\menu4.png"/>
          <div class="mui-media-body">香水</div>
        </router-link>
      </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="{ name: 'atch'}" class="title">
          <img src="..\assets\images\menu5.png"/>
          <div class="mui-media-body">腕表</div>
        </router-link>
      </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link :to="{ name: 'shoppingcar'}" class="title">
          <img src="..\assets\images\menu6.png"/>
          <div class="mui-media-body">购物车</div>
        </router-link>
      </li>
    </ul>
  <div class="mui-card">
	<!--页眉，放置标题-->
	<div class="mui-card-header">
        SERPENTI 项链
    </div>
	<!--内容区-->
	<div class="mui-card-content-1 mui-card-media " ></div>
	<!--页脚，放置补充信息或支持的操作-->

</div>
<div class="mui-card">
	<!--页眉，放置标题-->
	<div class="mui-card-header">
        SERPENTI 项链
    </div>
	<!--内容区-->
	<div class="mui-card-content-2 mui-card-media" ></div>
	<!--页脚，放置补充信息或支持的操作-->

</div>
<div class="mui-card">
	<!--页眉，放置标题-->
	<div class="mui-card-header">
        SERPENTI 项链
    </div>
	<!--内容区-->
	<div class="mui-card-content-3 mui-card-media " ></div>
	<!--页脚，放置补充信息或支持的操作-->

</div>
<div class="main">
  <ul>
    <li class="mui-icon mui-icon-weixin" @click="handleisshow"></li>
    <li class="mui-icon mui-icon-qq"></li>
    <li class="mui-icon mui-icon-weibo"></li>
    <li class="mui-icon mui-icon-phone"></li>
  </ul>
</div>
<ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">服务</a>
            <div class="mui-collapse-content">
                <p>在线服务</p>
                <p>售后服务</p>
                <p>配送服务</p>
                <p>退换货服务</p>
                <p>常见问题</p>
            </div>
        </li>
    </ul>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">关于Grace</a>
            <div class="mui-collapse-content">
                <p>联系我们</p>
                <p>相关介绍</p>
                  <p>官方微博</p>
                    <p>官方微信</p>
            </div>
        </li>
    </ul>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">法律声明和隐私条款</a>
            <div class="mui-collapse-content">
                <p>使用条款</p>
                <p>销售条款</p>
                <p>隐私政策</p>
            </div>
        </li>
    </ul>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">品牌故事</a>
            <div class="mui-collapse-content">
                <p>品牌故事</p>
            </div>
        </li>
    </ul>
  
  </div> 
  

</template>
<script>
import swiper from '../components/swiper.vue' //导入轮播图插件
export default {
  data(){
    return{
      imgList:[]    //返回保存图片地址的数组
    }
  },
  created(){this.getImgList()},
  methods:{
    getImgList(){
      this.imgList=[
        {id:1,img:require("../assets/photo/shangpin1.jpg")},
        {id:2,img:require("../assets/photo/shangpin2.jpg")},
        {id:3,img:require("../assets/photo/shangpin3.jpg")},
        {id:4,img:require("../assets/photo/shangpin4.jpg")}
        ]
    },
     handleisshow(){
					this.isShow=!this.isShow
				}
  },
  components:{
    swiper
  }
}
</script>
<style lang="scss" scoped>
.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border: none;
  img{
    width: 60px;
    height: 60px;
  }
}
.mui-table-view-cell>a.title{
  display: inline;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: 0;
}
.mui-media-body{
  font-size: 14px;
}
.mui-card-header {
    width: 355px;
    height: 50px;
    line-height: 50px; 
    margin: 0px 0px 0px 100px;
}
.mui-card-content-1{
    height: 250px;
    line-height: 250px; 
    margin: 0px 0px 0px 10px;
   background: url('../assets/good/zhubao-1.jpg');
}
.mui-card-content-2{
    height: 300px;
    line-height: 300px; 
    margin: 0px 0px 0px 10px;
  
   background: url('../assets/good/zhubao-2.jpg');
}
.mui-card-content-3{
    height: 300px;
    line-height: 300px; 
    margin: 0px 0px 0px 10px;
   background: url('../assets/good/zhubao-3.jpg');
}
.main{
  margin-top: 50px;
  line-height: 80px;
  background: #d4d0d0;
  width: 100%;
  height: 80px;
}
.mui-icon{
	font-size:35px;
}
.main ul{
  margin-left: 10px;
}
.main li{
  width: 80px;
  height: 80px;
}
.mui-table-view a{
  font-size: 20px;
  height: 50px;
  letter-spacing:2px;
}
.mui-collapse-content p{
  font-size: 18px;
  height: 40px;
  line-height: 40px;
}
</style>