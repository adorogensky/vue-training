<template>
  <div>
    <div v-for="thread in threads" :key="thread['.key']" class="col-large push-top">
      <div class="post-list">
        <forum-thread-page :id="thread['.key']" />
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.json'
import ForumThreadPage from '@/components/ForumThreadPage'

export default {
  name: 'ForumThreadListPage',
  components: {
    ForumThreadPage
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