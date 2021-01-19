<template lang="pug">
    button.lv-button(
        :type="type",
        @click="btnClicked",
        :class="{'lv-button--max-width' : maxWidth, 'lv-button--disable' : disableButton}"
        ) {{ text }}
</template>

<script>
export default {
    name: 'lv-button',
    props: {
        text: String,
        type: {
            type: String,
            default: 'button'
        },
        maxWidth: Boolean,
        disableButton: Boolean
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
        border-radius: 3px,
        border-width: 0,
        color: #fff,
        font-family: 'Roboto', sans-serif,
        font-size: 0.75em,
        height: 2.5em,
        min-width: 8em

        &--max-width
            width: 100%

        &--dark
            background-color: #20497f

        &--light
            background-color: #2e6dde

        &--disable
            opacity: 0.5,
            pointer-events: none

</style>
