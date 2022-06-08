<template>
<div class="a">
      <router-link class="mui-tab-item-lib " :to="{name:'discuss'}" >
 <span class="mui-tab-label">我参与的讨论</span>
 <div class=" mui-icon1 mui-icon mui-icon-arrowright"></div>
</router-link>
    <div class="mui-card">
	<!--页眉，放置标题-->
	<div class="mui-card-header mui-card-media">
        <img src="../assets/touxiang/1.png" alt="">
        <div class="mui-media-boby">
        <p>小米</p>
        <p>发布于 2020-11-30 15：30</p>
        </div>
        </div>
	<!--内容区-->
	<div class="mui-card-content">
        <img src="../assets/ring/1.png" alt="">
        <p> &nbsp;&nbsp;&nbsp;&nbsp; BVLGARI宝格丽以罗马的热情与隽永之美为灵感，打造ROMA AMOR订婚戒指，谱写爱的宣言。“ROMA”反过来拼写即为“AMOR”（爱情），蕴含无限情愫，恰如其名。ROMA AMOR戒指象征着热情与无私的情感，传递胜于言辞、超越梦想的爱恋</p></div>
	<!--页脚，放置补充信息或支持的操作-->
	<div class="footer" @click="footer">
                <img v-if="foo_type" src="../assets/tubiao/2.png">
               <img v-else src="../assets/tubiao/1.png">
               </div>
                
              <div class="forward">
        <img src="../assets/tubiao/3.png" alt="">
        </div>
       
       <div class="mask" v-if="showModal" @click="showModal=false"></div>
      <div class="pop" v-if="showModal">
              <button @click="showModal=false" class="btn">确定转发</button>
        
        </div>
        <button @click="showModal=true" class="btn">转发</button>
</div>



<div class="mui-card">
        <!--页眉，放置标题-->
	<div class="mui-card-header mui-card-media" style="margin-top:10px">
        <img src="../assets/touxiang/2.png" alt="">
        <div class="mui-media-boby">
        <p>七七</p>
        <p>发布于 2021-10-30 15：30</p>
        </div>
        </div>
	<!--内容区-->
	<div class="mui-card-content">
        <img src="../assets/bag/1.png" alt="">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;SERPENTI FOREVER系列珠宝盒手袋，从BVLGARI宝格丽古董典藏系列的银色珠宝盒汲取灵感，彰显品牌作为“珠宝与皮具大师”的地位。这款雕塑感十足的手提包以象牙蛋白石色URBAN粒纹小牛皮制成，搭配浅金镀金黄铜配饰，令人联想起古罗马华贵的化妆盒。这款造型别致的包款，配有可拆卸可调节链条和皮革肩带，经典蛇首搭扣和皮革手柄，有多种佩戴方式可供选择，包括手提、斜挎或肩背。配有两个经典蛇首拉链头，设一个隔层，包身底部设有一个隐藏隔层，一个配菱形化妆镜的镜袋，顶部饰有BVLGARI宝格丽金属标识。16 X 13 X 9.5 厘米 - 6.3 X 5.1 X 3.7 英寸。意大利制造</p></div>
	<!--页脚，放置补充信息或支持的操作-->
	<div class="footer" @click="footer">
                <img v-if="foo_type" src="../assets/tubiao/2.png">
               <img v-else src="../assets/tubiao/1.png">
                <!-- <img src="../assets/tubiao/3.png" alt=""> -->
                </div>
                 <div class="forward">
        <img src="../assets/tubiao/3.png" alt="">
        </div>
              
       <div class="mask" v-if="showModal" @click="showModal=false"></div>
      <div class="pop" v-if="showModal">
              <button @click="showModal=false" class="btn">确定转发</button>
        
        </div>
        <button @click="showModal=true" class="btn">转发</button>
</div>



<div class="mui-card">
        <!--页眉，放置标题-->
	<div class="mui-card-header mui-card-media" style="margin-top:10px">
        <img src="../assets/touxiang/3.png" alt="">
        <div class="mui-media-boby">
        <p>yiyi</p>
        <p>发布于 2021-10-26 18：30</p>
        </div>
        </div>
	<!--内容区-->
	<div class="mui-card-content">
        <img src="../assets/good/11.jpg" alt="">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;SERPENTI FOREVER系列珠宝盒手袋，从BVLGARI宝格丽古董典藏系列的银色珠宝盒汲取灵感，彰显品牌作为“珠宝与皮具大师”的地位。这款雕塑感十足的手提包以象牙蛋白石色URBAN粒纹小牛皮制成，搭配浅金镀金黄铜配饰，令人联想起古罗马华贵的化妆盒。这款造型别致的包款，配有可拆卸可调节链条和皮革肩带，经典蛇首搭扣和皮革手柄，有多种佩戴方式可供选择，包括手提、斜挎或肩背。配有两个经典蛇首拉链头，设一个隔层，包身底部设有一个隐藏隔层，一个配菱形化妆镜的镜袋，顶部饰有BVLGARI宝格丽金属标识。16 X 13 X 9.5 厘米 - 6.3 X 5.1 X 3.7 英寸。意大利制造</p></div>
	<!--页脚，放置补充信息或支持的操作-->
	<div class="footer" @click="footer">
                <img v-if="foo_type" src="../assets/tubiao/2.png">
               <img v-else src="../assets/tubiao/1.png">
                <!-- <img src="../assets/tubiao/3.png" alt=""> -->
                </div>
 <div class="forward">
        <img src="../assets/tubiao/3.png" alt="">
        </div>

       <div class="mask" v-if="showModal" @click="showModal=false"></div>
      <div class="pop" v-if="showModal">
              <button @click="showModal=false" class="btn">确定转发</button>
        
        </div>
        <button @click="showModal=true" class="btn">转发</button>
</div>



<div class="mui-card">
        <!--页眉，放置标题-->
	<div class="mui-card-header mui-card-media" style="margin-top:10px">
        <img src="../assets/touxiang/4.png" alt="">
        <div class="mui-media-boby">
        <p>lili</p>
        <p>发布于 2021-09-26 18：30</p>
        </div>
        </div>
	<!--内容区-->
	<div class="mui-card-content">
        <img src="../assets/good/zhubao-3.png" alt="">
        <p>&nbsp;&nbsp;&nbsp;BVLGARI BVLGARI系列手链以品牌奉为灵感来源的罗马文化为根基不断创新，将现代文化的优雅元素与之融合，经典之中展现热情而现代的时尚魅力。品牌双LOGO商标设计最初从古币的弧形铭文中汲取灵感，如今，它采用更加富有趣味的方式进行诠释，精美宝石为其注入全新活力。 BVLGARI BVLGARI系列18K玫瑰金手镯，镶嵌红玉髓</p></div>
	<!--页脚，放置补充信息或支持的操作-->
	<div class="footer" @click="footer">
                <img v-if="foo_type" src="../assets/tubiao/2.png">
               <img v-else src="../assets/tubiao/1.png">
                <!-- <img src="../assets/tubiao/3.png" alt=""> -->
                </div>
         <div class="forward">
        <img src="../assets/tubiao/3.png" alt="">
        </div>
                

       <div class="mask" v-if="showModal" @click="showModal=false"></div>
      <div class="pop" v-if="showModal">
              <button @click="showModal=false" class="btn">确定转发</button>
        
        </div>
        <button @click="showModal=true" class="btn">转发</button>
</div>


<div class="mui-card">
        <!--页眉，放置标题-->
	<div class="mui-card-header mui-card-media" style="margin-top:10px">
        <img src="../assets/touxiang/5.png" alt="">
        <div class="mui-media-boby">
        <p>暮柔</p>
        <p>发布于 2021-08-30 15：30</p>
        </div>
        </div>
	<!--内容区-->
	<div class="mui-card-content">
        <img src="../assets/bag/2.png" alt="">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SERPENTI FOREVER系列象牙蛋白石色激光切割小牛皮手提包，搭配浅金镀金黄铜配饰，融合日常魅力与精致皮具艺术，彰显全新工艺内涵。包袋设计从BVLGARI宝格丽古董时计的太阳射线纹饰表盘中汲取灵感，饰以渐变镂空圆点图案，以经典蛇首搭扣为中心，点缀哑光和亮面象牙蛋白石色珐琅鳞片和黑色缟玛瑙感性双眼，尽显迷人气质。轻松配搭不同日常造型，配有顶部手柄和可拆卸可调节的蛇形链条与皮革肩带，赋予包袋多种佩戴方式。设有三个隔层，一个配可个性化定制化妆镜的镜袋，一个内置BVLGARI宝格丽品牌标识金属铭牌，背面饰BVLGARI宝格丽金属标识。18 X 15 X 9.5 厘米 - 7.1 X 5.9 X 3.7 英寸。意大利制造。</p></div>
	<!--页脚，放置补充信息或支持的操作-->
	<div class="footer" @click="footer">
                <img v-if="foo_type" src="../assets/tubiao/2.png">
               <img v-else src="../assets/tubiao/1.png">
                <!-- <img src="../assets/tubiao/3.png" alt=""> -->
                </div>
                 <div class="forward">
        <img src="../assets/tubiao/3.png" alt="">
        </div>
              
       <div class="mask" v-if="showModal" @click="showModal=false"></div>
      <div class="pop" v-if="showModal">
              <button @click="showModal=false" class="btn">确定转发</button>
        
        </div>
        <button @click="showModal=true" class="btn">转发</button>



</div>


<router-view></router-view>
</div>
</template>

<script>
export default{
        name:"c",
        data(){
                return{
                       foo_type:0,
                       showModal:false,
                      
                }
        },
        
        methods:{
                footer(){
                        if(this.foo_type == 0){
                                this.foo_type =1
                        }else{
                                this.foo_type =0
                        }
                },
               
        }
        
}
</script>


<style  scoped>

/* 设置图片 */
 .mui-card-content img{
     width: 200px;
     height: 200px;
     margin-left:70px ;
 }
 .mui-card-content p{
         margin-left: 4px;
 }
.mui-media-boby p{
margin-left: 50px;
}
.mui-card-header  img{
border: 1px;
margin-top:6px ;
}
.mui-card-footer img{
        width: 20px;
        height: 20px;
}
/* 爱心 */
.footer img{
        width: 25px;
        height: 25px;
        margin-left: 20px;
        transform: translateY(10px)
}
/* 分享 */
.forward img{
        border: 2px;
        width: 25px;
        height: 25px;
        margin-left: 65px;
        transform: translateY(-22px) ;
       
}
.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
/* 第二个转发 */
.pop {
  background-color: #000;
 border: 10px;
  position: fixed;
  top: 330px;
  left: 100px;
  width: calc(100% - 800px);
  height:calc(100% - 200px);
  z-index: 2
}
.btn {
        border: 0.5px  solid #fff;
        margin-top:-30px ;
        margin-left: 50px; 
        /* transform: translateX(67px) translateY(-27px);
          transform: translateY(-27px); */
  /* background-color: #fff; */
  /* border-radius: 4px; */
  /* border: 1px solid #fff; */
  /* padding: 4px 12px; */
  
}
.btn img{
         border: 2px;
        width: 25px;
        height: 25px;
         margin-left: 55px;
        transform: translateY(-27px)
} 
.mui-tab-item-lib{
line-height: 35px;
margin-left:250px ;
font-size: 15px ;
color: #929292;
}
</style>
