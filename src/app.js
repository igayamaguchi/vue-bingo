import Vue from 'vue';
import App from './app.vue';
import store from './store';

var app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
