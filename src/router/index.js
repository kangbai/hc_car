import Vue from 'vue'
import Router from 'vue-router'
import myStorage from '../utils/myStorage'

Vue.use(Router)
const _import = require('./_import_' + process.env.NODE_ENV)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { reuqireAuth: true },
    component: _import('home/home'),
    redirect: '/financialLease',
    children: [
      {
        path: '/financialLease',
        name: 'fnancialLease',
        meta: { reuqireAuth: true },
        component: _import('financialLease/financialLease')
      },
      {
        path: 'amendLease/:id',
        name: 'amendLease',
        meta: { reuqireAuth: true },
        component: _import('amendLease/amendLease')
      }
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: _import('login/login')
  }
]

const router = new Router({
  routes
})

/**
 *  如果本地缓存没有myData 就强制跳转到登录页面
 *  比如用户强制清除缓存
*/

router.beforeEach((to, from, next) => {
  if (to.meta.reuqireAuth) {
    if (myStorage.get('myData')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
