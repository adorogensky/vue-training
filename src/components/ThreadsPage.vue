<template>
  <div class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>
      <thread-list-item v-for="thread in threads" :key="thread['.key']" :thread="thread" :user="getUserByThread(thread)" />
    </div>
  </div>
</template>

<script>
import data from "../data.json";
import ThreadPage from "@/components/ThreadPage";
import ThreadListItem from "./ThreadListItem"

export default {
  name: "ThreadsPage",
  components: {
    ThreadPage, ThreadListItem
  },
  data() {
    return {
      threads: data.threads,
      posts: data.posts,
      users: data.users
    };
  },
  methods: {
    getUserByThread(thread) {
      return Object.values(this.users).filter(
        user => user['.key'] === thread.userId
      ).shift();
    }
  }
};
</script>
