<template>
  <div>
    <h1>Welcome to the Forum</h1>
    <div :key="thread.id" v-for="thread in threads">
      <h2>{{ thread.title }}</h2>
      <div :key="postId" v-for="postId in thread.posts">
        <p>{{users[posts[postId].userId].name}}</p>
        <p>{{posts[postId].text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../data.json'

export default {
  name: 'Forum',
  data () {
    return {
      threads: data.threads,
      posts: data.posts,
      users: data.users
    }
  }
}
</script>