<template>
    <div class="controller">
        <button v-if="nowShuffle" @click="stop" type="button">STOP</button>
        <button v-else @click="start" type="button">START</button>
    </div>
</template>
<script>
    export default{
        methods: {
            start(){
                this.$store.commit('start');
            },
            stop(){
                this.$store.commit('stop');
            }
        },
        computed: {
            nowShuffle(){
                return this.$store.state.nowShuffle;
            }
        }
    }

</script>
