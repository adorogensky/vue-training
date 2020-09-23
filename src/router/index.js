import Vue from 'vue'
import Router from 'vue-router'
import Threads from '@/components/Threads'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Threads',
      component: Threads
    }
  ],
  mode: 'history'
})
