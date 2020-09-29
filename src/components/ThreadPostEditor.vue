<template>
    <form @submit.prevent="addPost">
        <div class="form-group">
            <textarea name="" id="" rows="10" class="form-input" v-model="newPostText"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn-blue">Submit Post</button>
        </div>
    </form>
</template>
<script>
export default {
    name: 'ThreadPostEditor',
    data() {
        return {
            newPostText: ''
        }
    },
    methods: {
        addPost() {
            const post = {
                text: this.newPostText,
                userId: 'Miej9zSGMRZKDvMXzfxjVOyv3RF3',
                threadId: this.threadId,
                createdAt: Math.floor(Date.now() / 1000)
            }

            this.$emit('add-post', { post });

            this.newPostText = '';
        }
    }
}
</script>