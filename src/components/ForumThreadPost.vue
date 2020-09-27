<template>
    <div class="container">
        <div class="user-info">
            <a href="#" class="user-name">{{user.name}}</a>
            <a href="#">
                <img class="avatar-large" :src="user.avatar" alt="">
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
</template>
<script>
export default {
    name: 'ForumThreadPost',
    props: ['user', 'post']
}
</script>