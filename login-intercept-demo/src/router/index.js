import Vue from 'vue'
import Router from 'vue-router'
// @ 表示项目的src目录 详见: webpack配置文件 /build/webpack.base.config.js
import loginComponent from '@/pages/login'
import homeComponent from '@/pages/home'
import usersComponent from '@/pages/home/users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    { path: '/login', component: loginComponent },
    {
      path: '/home',
      component: homeComponent,
      redirect: '/home/users',
      children: [
        { path: 'users', component: usersComponent }
      ]
    },
  ]
})
