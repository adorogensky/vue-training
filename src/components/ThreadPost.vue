<template>
    <div class="post-content">
        <div>
            <p>{{ post.text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ThreadPost',
    props: [ 'post' ]
}
</script>