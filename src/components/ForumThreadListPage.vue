<template>
  <div>
    <div v-for="thread in threads" :key="thread['.key']" class="col-large push-top">
      <div class="post-list">
        <thread-page :id="thread['.key']" />
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.json'
import ThreadPage from '@/components/ThreadPage'

export default {
  name: 'ForumThreadListPage',
  components: {
    ThreadPage
  },
  data () {
    return {
      threads: data.threads,
      posts: data.posts,
      users: data.users
    }
  }
}


</script>