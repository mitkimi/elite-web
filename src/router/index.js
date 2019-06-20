import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/layouts/index'
import Docs1 from '@/layouts/docs'
import Components1 from '@/layouts/components'

Vue.use(Router)
const vueRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs1,
      children: [
        {
          path: 'start-up',
          name: 'StartUp',
          component: () => import('@/views/docs/startUp')
        },
        {
          path: 'router-menu',
          name: 'RouterMenu',
          component: () => import('@/views/docs/routerMenu')
        },
        {
          path: 'layout',
          name: 'RouterMenu',
          component: () => import('@/views/docs/layout')
        },
        {
          path: 'new-page',
          name: 'CreatePage',
          component: () => import('@/views/docs/createPage')
        },
        {
          path: 'new-component',
          name: 'Createcomponent',
          component: () => import('@/views/docs/createcomponent')
        },
        {
          path: 'style',
          name: 'Style',
          component: () => import('@/views/docs/style')
        },
        {
          path: 'api',
          name: 'Api',
          component: () => import('@/views/docs/api')
        },
        {
          path: 'build',
          name: 'Build',
          component: () => import('@/views/docs/build')
        },
        {
          path: 'charts',
          name: 'Chart',
          component: () => import('@/views/docs/charts')
        },
        {
          path: 'icons',
          name: 'Icons',
          component: () => import('@/views/docs/icons')
        }
      ]
    },
    {
      path: '/components',
      name: 'components',
      component: Components1,
      children: [
        {
          path: 'introduction',
          name: 'Introduction',
          component: () => import('@/views/docs/startUp')
        }
      ]
    }
  ]
})
vueRouter.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

vueRouter.afterEach(() => {
  NProgress.done()
  window.scrollTo(0, 0)
})

export default vueRouter
