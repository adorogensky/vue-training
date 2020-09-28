import Vue from 'vue'
import Router from 'vue-router'
import ThreadsPage from '@/components/ThreadsPage'
import ThreadPage from '@/components/ThreadPage'
import NotFoundPage from '@/components/NotFoundPage'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ThreadsPage',
    component: ThreadsPage
  }, {
    path: '/thread/:id',
    name: 'ThreadPage',
    component: ThreadPage,
    props: true
  }, {
    path: '*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }],
  mode: 'history'
})
