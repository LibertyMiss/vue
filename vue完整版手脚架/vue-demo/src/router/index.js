import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopCarConponent from '../pages/shopCar/'
import searchComponent from '../pages/search/'
import newListComponent from '../pages/newList/'
import newsInfoComponent from '../pages/newsInfo/'
import photoComponent from '../pages/photoList'
import photoInfoComponent from '../pages/photoInfo/'
import goodsListComponent from '../pages/goodList/'
import goodDetailsComponent from '../pages/goodDetails/'
import goodsTuwenComponent from '../pages/goodsTuwen/'
import goodsCommentsComponent from '../pages/goodsComment'
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
    },
    {
      path: '/home/photoList',
      component: photoComponent
    },
    {
      path: '/home/photoListDetails/:id',
      component: photoInfoComponent
    },
    {
      path: '/home/goodsList',
      component: goodsListComponent
    },
    {
      path: '/home/goodsinfo/:id',
      component: goodDetailsComponent,
      name: 'goodsinfo'
    },
    {
      path: '/home/goodsTuwen/:id',
      component: goodsTuwenComponent,
      name: 'goodsTuwen'
    },
    {
      path: '/home/goodsComments/:id',
      component: goodsCommentsComponent,
      name: 'goodsComments'
    },
  ],
  linkActiveClass: "mui-active",
})
