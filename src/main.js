import Vue from 'vue';
import App from './App.vue';
import router from './router';
import LvButton from '@/components/lv-button.vue';
import VeeValidate from 'vee-validate';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyBQ6-TlsOt7TSN9JHMZhVuxKAJE3WKrmTk',
    authDomain: 'last-visit-32fc1.firebaseapp.com',
    projectId: 'last-visit-32fc1',
    storageBucket: 'last-visit-32fc1.appspot.com',
    messagingSenderId: '56543789226',
    appId: '1:56543789226:web:ef19e7de6b29dda5c590d3'
};

firebase.initializeApp(firebaseConfig);

Vue.use(VeeValidate);

Vue.config.productionTip = false;

Vue.component('lv-button', LvButton);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
