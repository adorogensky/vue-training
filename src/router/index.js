import Vue from 'vue'
import Router from 'vue-router'
import Forum from '@/components/Forum'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Forum',
      component: Forum
    }
  ]
})
