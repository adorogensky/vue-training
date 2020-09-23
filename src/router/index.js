import Vue from 'vue'
import Router from 'vue-router'
import ForumThreadList from '@/components/ForumThreadList'
import ForumThread from '@/components/ForumThread'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'ForumThreadList',
    component: ForumThreadList
  }, {
    path: '/thread/:id',
    name: 'ForumThread',
    component: ForumThread,
    props: true
  }, {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }],
  mode: 'history'
})
