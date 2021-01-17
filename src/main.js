import Vue from 'vue';
import App from './App.vue';
import router from './router';
import LvButton from '@/components/lv-button.vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

Vue.config.productionTip = false;

Vue.component('lv-button', LvButton);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
