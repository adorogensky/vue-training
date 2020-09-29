<template>
  <div class="thread">
    <div>
      <p>
        <a href="#">{{ thread.title }}</a>
      </p>
      <p class="text-faded text-xsmall">
        By <a href="#">{{ user.name }}</a>, yesterday.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">1 reply</p>

      <img class="avatar-medium" :src="user.avatar" alt="" />

      <div>
        <p class="text-xsmall">
          <a href="profile.html">Bruce Wayne</a>
        </p>
        <p class="text-xsmall text-faded">2 hours ago</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['thread', 'user']
}
</script>
