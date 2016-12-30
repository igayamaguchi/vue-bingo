import Vue from 'vue';
import App from './app.vue';
import store from './store';

var app = new Vue({
    store,
    render(h) {
        return h(App);
    }
}).$mount('#app');
