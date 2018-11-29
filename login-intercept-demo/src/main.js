import Vue from 'vue'
import App from './App'
import router from './router'

// 完整引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 注册EleemntUI
Vue.use(ElementUI);

// css reset
import './styles/common.less'

Vue.config.productionTip = false

// 路由的全局导航守卫
router.beforeEach((to, from, next) => {
  // 通过本地存储的token来校验是否登录  本地如果有token就是登陆了, 没有token就是未登录
  let token = localStorage.getItem('token')
  // console.log(to)
  if (!token && to.path !== '/login') return next({ path: '/login' })
  

  if (token && to.path === '/login') return next({ path: '/home' })

  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
