<template>
    <div class="row text-center">
        <div class="col-xs-12">
            <ul class="list-inline">
                <li v-for="number in history">{{ number }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        computed: {
            history(){
                return this.$store.state.history.history.concat().reverse();
            }
        }
    }


</script>
