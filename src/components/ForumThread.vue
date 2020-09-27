<template>
    <NotFoundPage v-if="thread === undefined" />
    <div v-else class="col-large push-top">
      <h1> {{ thread.title }} </h1>
      <div class="post-list">
        <div v-for="postId in thread.posts" :key="postId" class="post">
          <div class="user-info">
            <a href="#" class="user-name">{{users[posts[postId].userId].name}}</a>
            <a href="#">
              <img class="avatar-large" :src="users[posts[postId].userId].avatar" alt="">
            </a>
            <p class="desktop-only text-small">107 posts</p>
          </div>
          <div class="post-content">
            <div>
              <p>{{ posts[postId].text }}</p>
            </div>
          </div>

          <div class="post-date text-faded">
            6 hours ago
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import NotFoundPage from '@/components/NotFoundPage'
import data from '@/data'
export default {
    name: 'ForumThread',
    props: ['id'],
    components: {
        NotFoundPage
    },
    data() {
        return {
            thread: data.threads[this.id],
            users: data.users,
            posts: data.posts
        }
    }
}
</script>