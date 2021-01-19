import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter);

const routes = [
    {
        path: '*',
        redirect: { name: 'Login' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
    routes
});

/* istanbul ignore next */
router.beforeEach((to, from, next) => {
    const isAuthenticated = firebase.auth().currentUser;
    if (isAuthenticated && to.path === '/login') {
        firebase.auth().signOut();
        next();
    } else if (!isAuthenticated && to.path !== '/login') {
        next('/login');
    } else {
        next();
    }
});

export default router;
