<template>
  <div>
    <div v-for="thread in threads" :key="thread['.key']" class="col-large push-top">
      <div class="post-list">
        <forum-thread :id="thread['.key']" />
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.json'
import ForumThread from '@/components/ForumThread'

export default {
  name: 'ForumThreadList',
  components: {
    ForumThread
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