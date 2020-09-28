<template>
    <div class="user-info">
        <a href="#" class="user-name">{{user.name}}</a>
        <a href="#">
            <img class="avatar-large" :src="user.avatar" alt="">
        </a>
        <p class="desktop-only text-small">107 posts</p>
    </div>
</template>
<script>
export default {
    name: 'ThreadPostUser',
    props: ['user']
}
</script>