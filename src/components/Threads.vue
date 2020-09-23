<template>
  <div>
    <div v-for="thread in threads" :key="thread['.key']" class="col-large push-top">
      <div class="post-list">
        <thread :id="thread['.key']" />
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.json'
import Thread from '@/components/Thread'

export default {
  name: 'Forum',
  components: {
    Thread
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