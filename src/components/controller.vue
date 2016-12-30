<template>
    <div class="row text-center">
        <div class="col-xs-12">
            <button v-if="nowShuffle" @click="stop" type="button" class="btn btn-success">STOP</button>
            <button v-else @click="start" type="button" class="btn btn-primary">START</button>
        </div>
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
