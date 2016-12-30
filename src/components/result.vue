<template>
    <div class="result">
        <div v-if="nowShuffle" class="now-shuffle">
            シャッフル中
        </div>
        <div v-else class="result-number">
            {{ resultNumber }}
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
        computed: {
            nowShuffle(){
                return this.$store.state.nowShuffle;
            },
            resultNumber(){
                return this.$store.state.result.resultNumber;
            }
        }
    }
</script>
