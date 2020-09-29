<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post['.key']" class="post">
            <thread-post-user :user="users[post.userId]" />
            <thread-post :post="post" />
            <div class="post-date text-faded">{{ post.publishedAt | asDate }}</div>
        </div>
    </div>
</template>
<script>
import ThreadPostUser from '@/components/ThreadPostUser'
import ThreadPost from '@/components/ThreadPost'
import moment from 'moment'
export default {
    name: 'ThreadPosts',
    props: ['users', 'posts'],
    components: { ThreadPostUser, ThreadPost },
    filters: {
        asDate(timestamp) {
            return moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a');
        }
    }
}
</script>