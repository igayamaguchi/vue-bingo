<template>
    <ul>
        <li v-for="number in history">{{ number }}</li>
    </ul>
</template>
<style>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        font-size: 32px;
        list-style: none;
        display: inline-block;
        background-color: aquamarine;
        margin: 6px;
        border-radius: 50%;
        text-align: center;
        width: 50px;
        height: 50px;
        line-height: 50px;
    }

    li:first-child {
        background-color: greenyellow;
    }
</style>
<script>
    export default{
        computed: {
            history(){
                return this.$store.state.history.history.concat().reverse();
            }
        }
    }
</script>
