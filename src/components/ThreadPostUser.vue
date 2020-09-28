<template>
  <div class="user-info">
    <a href="#" class="user-name">{{ user.name }}</a>
    <a href="#">
      <img class="avatar-large" :src="user.avatar" alt="" />
    </a>
    <p class="desktop-only text-small">{{ postCount }} {{ postVerbiage }}</p>
  </div>
</template>
<script>
import data from "@/data";
export default {
  name: "ThreadPostUser",
  props: ["user"],
  computed: {
    postCount: function () {
        return Object.values(data.posts).filter(
            post => post.userId === this.user['.key']
        ).length;
    },
    postVerbiage: function() {
        return this.postCount > 1 ? 'posts' : 'post'
    }
  },
};
</script>