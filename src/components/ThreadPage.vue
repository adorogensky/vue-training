<template>
    <not-found-page v-if="thread === undefined" />
    <div v-else class="col-large push-top">
      <h1> {{ thread.title }} </h1>
      <thread-posts :users="users" :posts="posts" />
      <thread-post-editor @add-post="addPost" />
    </div>
</template>
<script>
import NotFoundPage from '@/components/NotFoundPage'
import ThreadPosts from '@/components/ThreadPosts'
import ThreadPostEditor from '@/components/ThreadPostEditor'
import data from '@/data'
export default {
    name: 'ThreadPage',
    props: ['id'],
    components: {
        NotFoundPage, ThreadPosts, ThreadPostEditor
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
        addPost({post}) {
            const newPostId = 'newPost' + this.postId++;

            this.$set(this.posts, newPostId, post);
            this.$set(this.thread.posts, newPostId, post);
        }
    }
}
</script>