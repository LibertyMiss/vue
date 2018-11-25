// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入vue 路由和app跟组件
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

//配置vue-resourse的根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'

//设置post表单数据格式
Vue.http.options.emulateJSON = true;
// 按需导入需要的mint-ui组件
import {
  Header,
  Swipe,
  SwipeItem,
  Button,
} from 'mint-ui';

//头部导航组件
Vue.component(Header.name, Header);
//轮播图组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//定义全局过滤器
Vue.filter('dataFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  //直接调用表示获取当前时间
  return moment(dateStr).format(pattern)
})
//安装缩略图插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

// 导入懒加载插件
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: './static/error.png',
  loading: './static/loading.png'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>'
})
