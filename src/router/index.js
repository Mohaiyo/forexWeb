import Vue from 'vue'
import Router from 'vue-router'
const Home = r => require.ensure([], () => r(require('@/pages/index')), 'home')
const Index = r => require.ensure([], () => r(require('@/pages/home/index')), 'home')
const Intro = r => require.ensure([], () => r(require('@/pages/intro/intro')), 'intro')
const HalfAnhour = r => require.ensure([], () => r(require('@/pages/halfAnhour/halfAnhour')), 'halfAnhour')
const TradeType = r => require.ensure([], () => r(require('@/pages/tradeType/tradeType')), 'tradeType')
const AboutUs = r => require.ensure([], () => r(require('@/pages/aboutUs/aboutUs')), 'aboutUs')
// const gmCheck = r => require.ensure([], () => r(require('src/pages/gmCheck/gmCheck')), 'gmCheck')
Vue.use(Router)

export default new Router({
  mode: 'history',
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: [
    { path: '', redirect: '/home' },
    { path: '/home',
      component: Home,
      children: [
        { path: '', redirect: 'index' },
        { path: 'index', component: Index, alias: '/a', name: 'index' },
        { path: 'intro/:id', component: Intro, name: 'intro' },
        { path: 'halfAnhour/:id', component: HalfAnhour, name: 'halfAnhour' },
        { path: 'tradeType/:id', component: TradeType, name: 'tradeType' },
        { path: 'aboutUs/:id', component: AboutUs, name: 'aboutUs' }
      ]
    }
  ]
})
