<template>
    <div>
        <h1>This page doesn't exist</h1>
        <router-link :to="{ name: 'ForumThreadList' }">Go Home</router-link>
    </div>
</template>
<style scoped>
    h1 {
        font-size: 60px;
    }
</style>