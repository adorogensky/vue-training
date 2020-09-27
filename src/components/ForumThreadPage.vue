<template>
    <not-found-page v-if="thread === undefined" />
    <div v-else class="col-large push-top">
      <h1> {{ thread.title }} </h1>
      <div class="post-list">
        <div v-for="postId in thread.posts" :key="postId" class="post">
          <forum-thread-post :user="users[posts[postId].userId]" :post="posts[postId]" />
        </div>
      </div>
    </div>
</template>
<script>
import NotFoundPage from '@/components/NotFoundPage'
import ForumThreadPost from '@/components/ForumThreadPost'
import data from '@/data'
export default {
    name: 'ForumThreadPage',
    props: ['id'],
    components: {
        NotFoundPage, ForumThreadPost
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