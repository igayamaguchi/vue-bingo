export default {
    start(state){
        console.log('start');
        if (!state.nowShuffle) {
            state.history.history.push(state.result.resultNumber);
        }
        state.nowShuffle = true;
    },
    stop (state){
        console.log('stop');

        if (!state.nowShuffle) {
            return;
        }

        const length = state.remainingNumber.length;
        const i = Math.floor(Math.random() * length);
        state.result.resultNumber = state.remainingNumber[i];
        state.remainingNumber.splice(i, 1);
        state.nowShuffle = false;
    }
};
