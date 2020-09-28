<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post['.key']" class="post">
            <div class="user-info">
                <a href="#" class="user-name">{{users[post.userId].name}}</a>
                <a href="#">
                    <img class="avatar-large" :src="users[post.userId].avatar" alt="">
                </a>
                <p class="desktop-only text-small">107 posts</p>
            </div>
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
export default {
    name: 'ForumThreadPostList',
    props: ['users', 'posts']
}
</script>