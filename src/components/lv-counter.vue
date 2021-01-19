<template lang="pug">
    .lv-counter
        p.lv-counter__digit {{ value }}
        p.lv-counter__label {{ label }}

</template>

<script>
export default {
    name: 'lv-counter',
    props: {
        value: String,
        label: String
    }
};
</script>

<style lang="sass">
.lv-counter
    width: 5em,
    display: flex,
    align-items: center,
    flex-direction: column

    &__digit,
    &__label
        margin: 0

    &__digit
        font-size: 2.5em,
        line-height: 0.9em

    &__label
        margin-bottom: 0
</style>
