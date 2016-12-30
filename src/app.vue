<template>
    <div>
        <result></result>
        <history></history>
        <controller></controller>
    </div>
</template>
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
