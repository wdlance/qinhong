import Vue from 'vue'
import Router from 'vue-router'
import Store from "@/store"
Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: 'login',
    }, {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/login'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home'),
      children: [{
        path: '',
        redirect: 'system-home'
      }, {
        path: 'system-home',
        name: 'system-home',
        component: () => import('@/pages/home/index')
      }, {
        path: 'account-set',
        name: 'account-set',
        component: () => import('@/pages/home/account-set')
      }, {
        path: 'system-info',
        name: 'system-info',
        component: () => import('@/pages/home/system-info')
      }, {
        path: 'logs',
        name: 'logs',
        component: () => import('@/pages/home/logs')
      }]
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/pages/goods'),
      children: [{
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        name: 'list',
        component: () => import('@/pages/goods/index')
      }, {
        path: 'add',
        name: 'add',
        component: () => import('@/pages/goods/add')
      }, {
        path: 'recycle',
        name: "recycle",
        component: () => import('@/pages/goods/recycle')
      }]
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/pages/shop'),
      children: [{
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        name: 'list',
        component: () => import('@/pages/shop/index')
      }, {
        path: 'addShop',
        name: 'addShop',
        component: () => import('@/pages/shop/addShop')
      }, {
        path: 'brands',
        name: "brands",
        component: () => import('@/pages/shop/brands')
      }, {
        path: 'recomend',
        name: "recomend",
        component: () => import('@/pages/shop/recomend')
      }]
    },
    {
      path: '/customer',
      name: "customer",
      component: () => import('@/pages/customer/index')
    },
    {
      path: '/customer/:id',
      name: "customer-info",
      component: () => import('@/pages/customer/detail')

    }, {
      path: '/cupon',
      component: () => import('@/pages/cupon'),
      children: [{
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        name: 'list',
        component: () => import('@/pages/cupon/index')
      }, {
        path: 'add',
        name: 'add',
        component: () => import('@/pages/cupon/add')
      }]
    },
    {
      path: '/news',
      component: () => import('@/pages/news'),
      children: [{
        path: '',
        redirect: 'list'
      }, {
        path: 'list',
        name: 'list',
        component: () => import('@/pages/news/index')
      }, {
        path: 'add',
        name: 'add',
        component: () => import('@/pages/news/add')
      }]
    }
  ]
})

router.beforeEach((to, from, next) => {
  let loginUser = localStorage.getItem("loginUser")
  if (!loginUser) {
    if (to.path != "/login") {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else {
    if (to.path != "/login") {
      Store.dispatch("get_menus_action")
      next()
    } else {
      next("/home")
    }
  }

})

export default router
