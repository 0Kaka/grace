<template>
    <div>
        <div class="member">
            <div class="member">
                <div class="header-con">
                    <div class="user-info">
                        <div class="avatar-con">
                            <div class="avatar">
                                <img src="../assets/images/avatar_default.png" class="image-info" />
                            </div>
                        </div>
                        <div class="person-con">
                            <router-link :to="{name:'login'}" class="mui-navigate-right" tag="span">登录</router-link>
                   /
                    <router-link :to="{name:'register'}" class="mui-navigate-right" tag="span">注册</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <!-- <div class="member">
            <div class="member">
                <div class="header-con">
                    <div class="user-info">
                        <div class="avatar-con">
                            <div class="avatar">
                                <img src="../assets/images/avatar_default.png" class="image-info" />
                            </div>
                        </div>
                        <div class="person-con">
                            <router-link :to="{name:'shezhi'}" class="mui-navigate-right" tag="span">设置</router-link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div> -->
         <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">设置</a>
            <div class="mui-collapse-content" >
                <!-- <span class="mui-icon mui-icon-gear"></span> -->
                <!-- <p>青少年守护模式<span class="mui-icon1 mui-icon mui-icon-arrowright"></span></p> -->
                   <router-link class="mui-tab-item-lib " :to="{name:'general'}" >
            
            <span class="mui-tab-label">通用</span>
            <div class=" mui-icon1 mui-icon mui-icon-arrowright"></div>
        </router-link>
                <p >长辈模式<span class="mui-icon mui-icon mui-icon-arrowright"></span></p>
                <p>青少年守护模式<span class="mui-icon mui-icon mui-icon-arrowright"></span></p>
                <p>外观设置<span class="mui-icon mui-icon mui-icon-arrowright"></span></p>
                <p>缓存路径<span class="mui-icon mui-icon mui-icon-arrowright"></span></p>
            </div>
        </li>
    </ul>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">个人信息</a>
            <div class="mui-collapse-content">
                <p>请先登录</p>
                
            </div>
        </li>
    </ul>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">意见反馈</a>
            <div class="mui-collapse-content">
                <p>图片无法加载？</p>
                <p>网页加载失败？</p>
                <p>商品无法支付？</p>
            </div>
        </li>
    </ul>
     <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">隐私中心</a>
            <div class="mui-collapse-content">
                <p>隐私管理</p>
                <p>信息共享清单</p>
                 <p>服务协议</p>
                  <p>隐私保护</p>
                   <p>常见问题</p>
                    <p>联系我们</p>
            </div>
        </li>
    </ul>
     <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">青少年守护模式</a>
            <div class="mui-collapse-content">
                <p>开启青少年守护模式</p>
            </div>
        </li>
    </ul>
     <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">权限申请与使用说明</a>
            <div class="mui-collapse-content">
                <p>申请权限</p>
                <p>使用说明</p>
            </div>
        </li>
    </ul>
    <ul class="mui-table-view"> 
        <li class="mui-table-view-cell mui-collapse">
            <a class="mui-navigate-right" href="#">检查更新</a>
            <div class="mui-collapse-content">
                <p>当前版本12.12.0</p> 
            </div>
        </li>
    </ul>
    </div>
</template>

<script>
export default{
    data(){
        return{}
    }
};
</script>

<style lang="scss" scoped>
.member{
    margin-bottom:15px ;
    .header-con{
        padding:10px;
        background-color: #fff;
        .user-info{
            position:relative;
            overflow:hidden;
            width: 100%;
            height: 120px;
            background: linear-gradient(0deg,#fff3f3,#fd5656);
            box-shadow: 0 0.1rem 0.25rem #f8e3c6;
            .avatar-con{
                position: absolute;
                left: 15px;
                top:50%;
                transform: translateY(-50%);
                .avatar{
                    width: 60px;
                    height: 60px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0,0,0,15);
                    border:1px solid hsla(0, 0%, 100%, 0.4);
                    border-radius: 50% 50%;
                    .image-info{width: 100%; height: 100%;}
                }
            }
            .person-con{
                position: absolute;
                left: 90px;
                top: 50%;
                transform: translateY(-50%);
                color: #fff;
            }
        }
    }
}
.mui-collapse-content p{
    font-size: 15px;
    line-height: 50px;
}
.mui-tab-item-lib{
       line-height: 50px;
    font-size: 15px ;
    color: #929292;
}
// .mui-collapse-content span {
// //    margin-left: 20px;
// }
</style>
