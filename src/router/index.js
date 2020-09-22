import Vue from 'vue'
import Router from 'vue-router'
import Thread from '@/components/Thread'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Thread',
      component: Thread
    }
  ]
})
