<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post['.key']" class="post">
            <thread-post-user :user="users[post.userId]" />
            <thread-post :post="post" />
            <div class="post-date text-faded">
                6 hours ago
            </div>
        </div>
    </div>
</template>
<script>
import ThreadPostUser from '@/components/ThreadPostUser'
import ThreadPost from '@/components/ThreadPost'
export default {
    name: 'ForumThreadPostList',
    props: ['users', 'posts'],
    components: { ThreadPostUser, ThreadPost }
}
</script>