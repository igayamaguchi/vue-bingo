<template>
    <div class="row text-center">
        <div v-if="nowShuffle" class="col-xs-12">
            シャッフル中
        </div>
        <div v-else class="col-xs-12">
            {{ resultNumber }}
        </div>
    </div>
</template>
<style>

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
