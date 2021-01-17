<template lang="pug">
    .lv-input
        input.lv-input__input(
            :id="inputId",
            :type="type",
            :placeholder="placeholder",
            v-validate="validations",
            :data-vv-as="inputAlias",
            :name="name",
            @input="emitValue"
            )
        label.lv-input__error(:for="inputId") {{ errors && errors.first(name) }}
</template>

<script>
export default {
    name: 'lv-input',
    props: {
        type: {
            type: String,
            default: 'text'
        },
        placeholder: String,
        validations: String,
        inputAlias: String,
        name: String,
        inputId: String
    },
    methods: {
        emitValue (event) {
            this.$emit('lv-input-value', event.target.value.trim());
        }
    }
};
</script>

<style lang="sass">
    .lv-input
        display: flex,
        flex-direction: column

        &__input
            border-width: 0,
            box-shadow: 0 2px #a9a9a9,
            font-family: 'Roboto', sans-serif,
            height: 2em

        &::placeholder
            color: #a9a9a9,
            font-size: 0.75em

        &__error
            color: #ff6868,
            font-size: 0.75em,
            padding: 0.5em 0.25em
</style>
