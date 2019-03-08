import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/layouts/index'
import Docs1 from '@/layouts/docs'

Vue.use(Router)

export default new Router({
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
        }
      ]
    }
  ]
})
