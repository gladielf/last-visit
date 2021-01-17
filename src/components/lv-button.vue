<template lang="pug">
    button.lv-button(:type="type" @click="btnClicked") {{ text }}
</template>

<script>
export default {
    name: 'lv-button',
    props: {
        text: String,
        type: {
            type: String,
            default: 'button'
        }
    },
    methods: {
        btnClicked () {
            this.$emit('lv-button-clicked');
        }
    }
};
</script>

<style lang="sass">
    .lv-button
        font-family: 'Roboto', sans-serif,
        border-width: 0,
        color: #fff,
        height: 2.5em,
        font-size: 0.75em,
        min-width: 8em,
        border-radius: 3px

        &--dark
            background-color: #20497f
        &--light
            background-color: #2e6dde
</style>
