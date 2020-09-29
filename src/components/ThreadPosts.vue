<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post['.key']" class="post">
            <thread-post-user :user="users[post.userId]" />
            <thread-post :post="post" />
            <thread-post-date :timestamp="post.publishedAt" />
        </div>
    </div>
</template>
<script>
import ThreadPostUser from '@/components/ThreadPostUser'
import ThreadPost from '@/components/ThreadPost'
import ThreadPostDate from '@/components/ThreadPostDate'
export default {
    name: 'ThreadPosts',
    props: ['users', 'posts'],
    components: { ThreadPostUser, ThreadPost, ThreadPostDate }
}
</script>