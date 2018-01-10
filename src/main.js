// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routers from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import local from './i18n'
import iView from 'iview'
import en_US from 'iview/dist/locale/en-US'
import zh_CN from 'iview/dist/locale/zh-CN'
import 'iview/dist/styles/iview.css'
import Util from "./util"

Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(iView)


Vue.config.productionTip = false

//多语言配置
const messages = {
  en: Object.assign(local['en-US'], en_US),
  zh: Object.assign(local['zh-CN'], zh_CN)
}

const Local = 'zh'

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: Local,  // set locale
  messages  // set locale messages
})

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
}


const router = new VueRouter(RouterConfig)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  Util.title(to.meta.title)
  next()
})

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish()
  Util.title(to.meta.title)
  window.scrollTo(0, 0)
})


new Vue({
  el: '#app',
  store,
  i18n,
  router: router,
  components: {App},
  template: '<App/>',
})
