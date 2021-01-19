<template lang="pug">
.view.home
    h2.home__title Welcome!
    p.home__subtitle The last time you accessed was
    .home__counters-group
        lv-counter.home__counter(:value="days", label="days")
        lv-counter.home__counter(:value="hours", label="hours")
        lv-counter.home__counter(:value="mins", label="minutes")
        lv-counter.home__counter(:value="secs", label="seconds")
    lv-button.lv-button--light.home__button(text="LOGOUT", @lv-button-clicked="logout")
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import LvCounter from '@/components/lv-counter.vue';

export default {
    name: 'Home',
    components: {
        LvCounter
    },
    data () {
        return {
            lastLogin: 0,
            intervalId: 0,
            days: '00',
            hours: '00',
            mins: '00',
            secs: '00',
            dbRef: undefined
        };
    },
    methods: {
        /* istanbul ignore next */
        getLastVisit () {
            if (firebase.apps.length) {
                this.dbRef = firebase.database().ref(`Users/${firebase.auth().currentUser.uid}`);
                this.dbRef.once('value', (snapshot) => this.configInterval(snapshot.val().lastSignIn));
            }
        },
        /* istanbul ignore next */
        logout () {
            this.updateLastVisit();

            firebase.auth().signOut().then(() => {
                window.clearInterval(this.intervalId);
                this.$router.push('login');
            });
        },
        updateLastVisit () {
            const lastSignInTime = new Date().getTime();
            this.dbRef.set({ lastSignInTime });
        },
        calculateTimeSpend () {
            const now = new Date().getTime();
            const timeSpend = now - this.lastLogin;
            const dateSpend = new Date(timeSpend);
            this.days = String(dateSpend.getDate() - 1).padStart(2, '0');
            this.hours = String(dateSpend.getHours() - 1).padStart(2, '0');
            this.mins = String(dateSpend.getMinutes()).padStart(2, '0');
            this.secs = String(dateSpend.getSeconds()).padStart(2, '0');
        },
        configInterval (lastSignIn) {
            this.lastLogin = lastSignIn;
            this.calculateTimeSpend();
            this.intervalId = window.setInterval(this.calculateTimeSpend, 1000);
        }
    },
    mounted () {
        this.getLastVisit();
    }
};
</script>

<style lang="sass">
.home
    &__title
        margin: 0
        color: #000
    &__subtitle
        margin-top: 0.5em

    &__counters-group
        display: flex,
        justify-content: space-between,
        margin-top: 2.5em

    &__counter
        align-content: space-between

    &__button
        margin-top: 4em
</style>
