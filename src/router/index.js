import Vue from 'vue'
import Router from 'vue-router'
import Threads from '@/components/Threads'
import Thread from '@/components/Thread'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Threads',
    component: Threads
  }, {
    path: '/thread/:id',
    name: 'Thread',
    component: Thread
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }],
  mode: 'history'
})
