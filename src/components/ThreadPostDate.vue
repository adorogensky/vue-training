<template>
    <div class="post-date text-faded">{{ timestamp | asDate }}</div>
</template>
<script>
import moment from 'moment'
export default {
    props: ['timestamp'],
    filters: {
        asDate(timestamp) {
            return moment.unix(timestamp).format('MMMM Do YYYY, h:mm:ss a');
        }
    }
}
</script>