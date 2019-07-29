import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:"/brands"
    },{
      path: '/brands',
      name: 'brands',
      component:() => import('@/page/brands/index.vue'),
    },{
      path: '/users',
      name: 'users',
      component:() => import('@/page/users.vue'),
    },{
      path: '/goods',
      name: 'goods',
      component:() => import('@/page/goods.vue'),
    },{
      path: '/merchants',
      name: 'merchants',
      component:() => import('@/page/merchants.vue'),
      },{
      path: '/shops',
      name: 'shops',
      component:() => import('@/page/shops.vue'),
      },{
      path: '/shops_type',
      name: 'shops_type',
      component:() => import('@/page/shops_type.vue'),
      },{
      path: '/comments',
      name: 'comments',
      component:() => import('@/page/comments.vue'),
      },{
      path: '/articles',
      name: 'articles',
      component:() => import('@/page/articles/index.vue'),
      },{
        path:"/preview/:page/:id?",
        name:"preview",
        component:()=> import("@/components/preView")
      },{
        path:"/update/:page/:id?",
        name:"update",
        component:()=> import("@/components/addOrEdit")
      }/*,{
      path: '/cities',
      name: 'cities',
      component:() => import('@/page/cities.vue'),
    },{
      path: '/peddles',
      name: 'peddles',
      component:() => import('@/page/peddles.vue'),
    },{
      path: '/stats',
      name: 'stats',
      component:() => import('@/page/stats.vue'),
    },{
      path: '/promise',
      name: 'promise',
      component:() => import('@/page/promise.vue'),
    }*/
  ]
})
