<template>
    <not-found-page v-if="thread === undefined" />
    <div v-else class="col-large push-top">
      <h1> {{ thread.title }} </h1>
      <forum-thread-post-list :users="users" :posts="posts" />
    </div>
</template>
<script>
import NotFoundPage from '@/components/NotFoundPage'
import ForumThreadPostList from '@/components/ForumThreadPostList'
import data from '@/data'
export default {
    name: 'ForumThreadPage',
    props: ['id'],
    components: {
        NotFoundPage, ForumThreadPostList
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