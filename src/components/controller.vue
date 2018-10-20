<template>
    <div v-if="isOver" class="controller">
        <button v-if="nowShuffle" @click="stop" type="button">STOP</button>
        <button v-else @click="start" type="button">START</button>
    </div>
    <div v-else>
        <p>終了</p>
    </div>
</template>
<script>
    export default{
        methods: {
            start(){
                this.$emit('start');
            },
            stop(){
                this.$emit('stop');
            }
        },
        computed: {
            nowShuffle(){
                return this.$store.state.nowShuffle;
            },
            isOver(){
                return this.$store.state.remainingNumber.length > 0;
            }
        }
    }

</script>
