import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './lib/mui/css/mui.css'
import axios from 'axios'
import store from './store/index.js'
//导入mui
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//导入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css' // 需要单独引入样式文件
Vue.use(MintUI)
import './lib/mui/css/mui.css'         // 样式文件
import './lib/mui/css/icons-extra.css'   // 扩展样式库文件

//false关闭生产模式下给出的提示
//  Vue.config.productionTip = false


axios.defaults.timeout = 3000  // 响应时间
// 这里的http://localhost:8080为本地接口，在开发中需要换成真实的接口
axios.defaults.baseURL = 'http://localhost:8080' 
// 为Vue添加一个原型属性$http指向axios 
Object.defineProperty(Vue.prototype, '$http', {
  value: axios
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
