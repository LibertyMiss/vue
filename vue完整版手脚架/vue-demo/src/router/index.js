import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopCarConponent from '../pages/shopCar/'
import searchComponent from '../pages/search/'
import newListComponent from '../pages/newList/'
import newsInfoComponent from '../pages/newsInfo/'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: homeComponent
    },
    {
      path: '/member',
      component: memberComponent
    },

    {
      path: '/shopCar',
      component: shopCarConponent
    },
    {
      path: '/search',
      component: searchComponent
    },
    {
      path: '/home/newList',
      component: newListComponent
    },
    {
      path: '/home/newsInfo/:id',
      component: newsInfoComponent
    }
  ],
  linkActiveClass: "mui-active",
})
