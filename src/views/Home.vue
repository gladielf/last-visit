<template lang="pug">
.view.home
    h2.home__title Welcome!
    p.home__subtitle The last time you accessed was
    .home__counters-group
        lv-counter.home__counter(value="00", label="days")
        lv-counter.home__counter(value="00", label="hours")
        lv-counter.home__counter(value="00", label="minutes")
        lv-counter.home__counter(value="00", label="seconds")
    lv-button.lv-button--light.home__button(text="LOGOUT", @lv-button-clicked="logout")
</template>

<script>
import LvCounter from '@/components/lv-counter.vue';

export default {
    name: 'Home',
    components: {
        LvCounter
    },
    methods: {
        logout () {
            this.$router.push('Login');
        }
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
