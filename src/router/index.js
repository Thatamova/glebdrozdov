import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/index.vue'
import Page from '@/pages/page.vue'
import DoubleBasses from '@/components/double_basses/index.vue'
import Cellos from '@/components/сellos/index.vue'
import Violins from '@/components/violins/index.vue'
import Biography from '@/components/biography/index.vue'
import Workshop from '@/components/workshop/index.vue'
import Сontacts from '@/components/contact/index.vue'
import EmptyPage from '@/components/empty_page/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '',
      name: 'Page',
      component: Page,
      children: [
        {
          path: '/biography',
          component: Biography,
          name: 'Biography'
        },
        {
          path: '/double-basses',
          component: DoubleBasses,
          name: 'DoubleBasses'
        },
        {
          path: '/cellos',
          component: Cellos,
          name: 'Cellos'
        },
        {
          path: '/violins',
          component: Violins,
          name: 'Violins'
        },
        {
          path: '/workshop',
          component: Workshop,
          name: 'Workshop'
        },
        {
          path: '/contacts',
          component: Сontacts,
          name: 'Contacts'
        },
        {
          path: '*',
          component: EmptyPage,
          name: 'EmptyPage'
        }
      ]
    }
  ]
})
