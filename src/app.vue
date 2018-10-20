<template>
    <div>
        <result
            :now-shuffle="$store.state.nowShuffle"
            :number="$store.state.result.resultNumber"
        />
        <controller></controller>
        <history></history>
    </div>
</template>
<style>
    body {
        text-align: center;
    }
    div {
        margin: 0;
        padding: 0;
    }
</style>
<script>
    import Result from './components/result.vue';
    import History from './components/history.vue';
    import Controller from './components/controller.vue';

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {
            Result,
            History,
            Controller
        }
    }
</script>
