<template>
    <div class="goods-info">
        <!-- 商品展示图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <div style="text-aligh:center;">
                        <img v-bind:src="goodsinfo.img" style="height:200px;margin:0px 0px 0px 20px;"/></div>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsinfo.name}}</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p class="go-num">
                            编号：<span>{{goodsinfo.id}}</span>
                        </p>
                        <p class="price">
                            定价：<span>￥{{goodsinfo.price}}</span>
                        </p>
                        <div v-if="goodsinfo.num">
                            <p>库存情况：{{goodsinfo.num}}件
    
                            </p>
                            <p class="go-num">
                                购买数量
                                <numbox :max="goodsinfo.num" initcount="1" :goodsid="goodsinfo.id" size="min"></numbox>
                            </p>
                            <p class="go-buy">
                                <mt-button type="primary" size="small">立即购买</mt-button>
                                <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
                            </p>
                        </div>
                        <div v-else>暂无库存</div>
                    </div>
                </div>
            </div>
            <!-- 商品参数区域 -->
            <div class="mui-card">
                <div class="mui-card-header">商品参数</div>
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <p>商品型号：ACFD837473</p>
                        <p>商品规格：TFF</p>
                        <p>商品颜色：土豪金</p>
                    </div>
                </div>
                <div class="mui-card-header">商品详情</div>
                <div class="good-desc">
                    <div class="content">这是一个不错的商品，赶紧购买吧!</div>
                </div>
            </div>
        </div>
    
</template>
<script>
import numbox from '../components/numbox.vue'  //导入数字输入框组件 
export default {
    data(){
        return{
            goodsinfo:{},
            //获取到的商品信息
        }
    },
    props:['gInfo'],
    created(){
        this.getGoodsInfo()
    },
    methods:{
        getGoodsInfo(){
            this.goodsinfo=this.$route.params.gInfo //接受父组件params传值gInfo
        },
        addToCart(){
            console.log(this.goodsinfo.id)
        }
    },
    components:{
        numbox
    }
}
</script>
<style lang="scss" scoped>
.goods-info{
    background: #f1f1ff;
    overflow: hidden;
    .price{
        span{
            color: red;
            font-size: 14px;
            font-weight: bold;
        }
    }
    .go-buy{
        display: flex;
        margin: 10px 0 0px;
        justify-content: center;
        button{
            margin: 0 5px;
        }
    }
    .good-desc{
        background: #fff;
        padding: 5px;
        h3{
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }
        .content{
            font-size: 14px;
            line-height: 28px;
            img{
                width: 100%;
            }
        }
    }
    .go-num{
        div{
            margin-left: 10px;
        }
    }
}
</style>