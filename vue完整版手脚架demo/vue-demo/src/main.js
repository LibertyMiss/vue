// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入vue 路由和app跟组件
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)
// 按需导入需要的mint-ui组件
import {
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui';

//头部导航组件
Vue.component(Header.name, Header);
//轮播图组件
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>'
})
