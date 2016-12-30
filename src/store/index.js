import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import result from './modules/result';
import controller from './modules/controller';
import history from './modules/history';

Vue.use(Vuex);

const state = {
    remainingNumber: allRange(75),
    nowShuffle: false
};

export default new Vuex.Store({
    state,
    mutations,
    modules: {
        result,
        history,
        controller
    }
});

function allRange(num) {
    if (typeof num !== 'number') {
        return null;
    }

    const args = [];
    for (let i = 1; i <= num; i++) {
        args.push(i);
    }

    return args;
}