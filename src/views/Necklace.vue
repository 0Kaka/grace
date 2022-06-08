<!--商品列表组件-->
<template>
    <div class="goods-list">
        <div  class="goods-item" v-for="item in goodslist" :key="item.id">
            <router-link :to="{name:'goodsInfo',params:{gInfo:item}}">
                <img :src="item.img" />
<h1 class="title">{{ item.name }}</h1>
<p class="info">
    <span class="price">￥{{item.price}}</span>
    <span class="sell">剩余{{ item.num }} 件</span>
</p>
            </router-link>
        </div>
        <mt-button class="more" v-if="goodslist.length>=last_id" size="large" @click="getMore">加载更多</mt-button>
    <div class="more" style="text-align :center;width:100%" v-else>已经到底了...</div>
    </div>
</template>

<script>
export default{
    data (){
        return{
            testlist:[
                {id:1,name:'SERPENTI 项链',price:98,num:100,img:require("../assets/good/11.png")},
                 {id:2,name:'SERP项链',price:1268,num:0,img:require("../assets/good/12.png")},
                  {id:3,name:'BVLGARI BVLGARI 项链',price:300,num:100,img:require("../assets/good/13.png")},
                   {id:4,name:'BVLGARIB.ZERO1项链',price:4500,num:80,img:require("../assets/good/14.png")},
                    {id:5,name:'DIVAS’ DREAM 项链',price:350,num:100,img:require("../assets/good/15.png")},
                     {id:6,name:'B.ZERO1 项链',price:5000,num:70,img:require("../assets/good/16.png")},
                      {id:7,name:'SERPENTI VIPER 项链',price:350,num:100,img:require("../assets/good/17.png")},
                       {id:8,name:'BVLGARI BVLGARI 项链',price:350,num:100,img:require("../assets/good/18.png")},
                        {id:9,name:'SERPENTI VIPER 项链',price:180,num:100,img:require("../assets/good/19.png")},
                         {id:10,name:'SERPENTI项链',price:8000,num:100,img:require("../assets/good/20.png")},
                            
                ],
               goodslist:[],//页面需要显示的产品集合
               last_id:0//序号

        }
    },
    created(){ //vue实例被生成后调用created函数，实现获取页面初始化所需要的数据
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){ //获取每次需要加载的goodslist
         for(var i=this.last_id;i<this.testlist.length;i++){ //每次循环把四件商品放到goodslist
    this.goodslist =this.goodslist.concat(this.testlist[i])
    if(i==5+this.last_id)
        break
         }
         this.last_id = i+1
console.log(this.last_id)
},
getMore(){ //加载更多
this.getGoodsList()
}
    }
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
    .goods-item{
        width: calc(
            calc(100% / 2) - 10px
        );
        margin: 10px 10px 0 0 ;
        background: #fff;
        display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 10px;
    img{width: 100%;
        
    }
    .title{
        font-size: 14px;
        color: #333;
        margin: 10px 0;
    }
    .info{
        display: flex;
        justify-content: space-between;
        margin-bottom: 0;
        .price{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
        .sell{font-size: 13px;}
    }
    }
    .more{
        margin: 15px 0 ; font-size: 14px;
    }
}
</style>
