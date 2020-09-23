import Vue from 'vue'
import Router from 'vue-router'
import Threads from '@/components/Threads'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Threads',
    component: Threads
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }],
  mode: 'history'
})
