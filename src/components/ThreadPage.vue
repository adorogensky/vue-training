<template>
    <not-found-page v-if="thread === undefined" />
    <div v-else class="col-large push-top">
      <h1> {{ thread.title }} </h1>
      <thread-posts :users="users" :posts="posts" />
      <form @submit.prevent="addPost">
          <div class="form-group">
              <textarea name="" id="" rows="10" class="form-input" v-model="newPostText"></textarea>
          </div>
          <div class="form-actions">
              <button class="btn-blue">Submit Post</button>
          </div>
      </form>
    </div>
</template>
<script>
import NotFoundPage from '@/components/NotFoundPage'
import ThreadPosts from '@/components/ThreadPosts'
import data from '@/data'
export default {
    name: 'ThreadPage',
    props: ['id'],
    components: {
        NotFoundPage, ThreadPosts
    },
    data() {
        return {
            thread: data.threads[this.id],
            users: data.users,
            posts: data.posts,
            newPostText: '',
            postId: 0
        }
    },
    methods: {
        addPost() {
            const newPostId = 'newPost' + this.postId
            const post = {
                text: this.newPostText,
                userId: 'Miej9zSGMRZKDvMXzfxjVOyv3RF3',
                threadId: this.threadId,
                createdAt: Math.floor(Date.now() / 1000),
                '.key': newPostId
            }

            this.$set(this.posts, newPostId, post);
            this.$set(this.thread.posts, newPostId, post);
            this.postId++

            this.newPostText = '';
        }
    }
}
</script>