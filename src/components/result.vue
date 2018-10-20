<template>
    <div class="result">
        <div v-if="nowShuffle" class="now-shuffle">
            シャッフル中
        </div>
        <div v-else class="result-number">
            {{ number }}
        </div>
    </div>
</template>
<style>
    .result {
        height: 300px;
        line-height: 300px;
    }
    .result-number {
        font-size: 200px;
    }
</style>
<script>
    export default{
        props: {
            nowShuffle: {
                type: Boolean,
                required: false,
            },
            number: {
                type: Number,
                required: false,
            }
        }
    }
</script>
