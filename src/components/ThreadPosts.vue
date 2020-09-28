<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post['.key']" class="post">
            <thread-post-user :user="users[post.userId]" />
            <div class="post-content">
                <div>
                    <p>{{ post.text }}</p>
                </div>
            </div>
            <div class="post-date text-faded">
                6 hours ago
            </div>
        </div>
    </div>
</template>
<script>
import ThreadPostUser from '@/components/ThreadPostUser'
export default {
    name: 'ForumThreadPostList',
    props: ['users', 'posts'],
    components: { ThreadPostUser }
}
</script>