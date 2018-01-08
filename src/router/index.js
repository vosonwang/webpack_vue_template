import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'

Vue.use(Router)
Vue.use(iView)

const routers = [
  {
    path: '*',
    meta: {
      title: 'Page Not Found'
    },
    name: '404',
    component: (resolve) => require(['../views/404.vue'], resolve)

  }
]

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
}

const router = new Router(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  next()
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
