import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

//运行路由插件
Vue.use(VueRouter)

//导入登录和注册对应的路由组件
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Message from '../views/Message.vue'
import User from '../views/User.vue'
import GoodsInfo from '../views/GoodsInfo.vue'
import Shoppingcar from '../views/Shoppingcar.vue'
import Bag from '../views/Bag.vue'
import Ring from '../views/Ring.vue'
import General from '../views/General.vue'
import Necklace from '../views/Necklace.vue'
import Disscuss from '../views/Discuss.vue'
import Watch from '../views/watch.vue'

//创建路由实例对象router
var router = new VueRouter({
  mode: 'history',             //使用history模式
  linkActiveClass:'my-active', //router-link-active
  linkExactActiveClass:'my-exact-active', //router-link-exact-active
  routes: [  
    { path: '/', redirect: '/home',meta: { title: '首页' } },
    { path: '/home', component: Home, name: 'home', meta: { title: '首页' } },
    { path: '/category', component: Category,name:'category',meta: { title: '分类' } },
    { path: '/category/goodsInfo', component: GoodsInfo,name:'goodsInfo',meta: { title: '商品详情' } },
    { path: '/message', component: Message,name:'message',meta: { title: '讨论' } },
    { path: '/user', component: User, name: 'user', meta: { title: '我的' } },
    { path: '/user/General', component: General, name: 'general', meta: { title: '通用' } },
    { path: '/user/login', component: Login,name :'login',meta: { title: '登录' } },
    { path: '/user/register', component: Register,name:'register',meta: { title: '注册' } },
    { path: '/bag', component: Bag,name:'bag',meta: { title: '包包' } },
    { path: '/shoppingcar', component: Shoppingcar,name:'shoppingcar',meta: { title: '购物车' } },
    { path: '/ring', component: Ring,name:'ring',meta: { title: '戒指' } },
    { path: '/necklace', component: Necklace,name:'necklace',meta: { title: '项链' } },
    { path: '/discuss', component: Disscuss,name:'discuss',meta: { title: '我参与的页面' } },
    { path:'/watch',component:Watch,name:'watch',meta:{title:'手表'}}
  ]
})

//导航钩子函数
router.beforeEach((to, from, next) => {
  // 路由发生改变，修改页面title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next() 
})
//暴露路由对象属性
export default router
