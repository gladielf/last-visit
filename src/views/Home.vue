<template lang="pug">
  .home
    lv-button.lv-button--light(text="LOGOUT", @lv-button-clicked="logout")
</template>

<script>

export default {
    name: 'Home',
    methods: {
        logout () {
            this.$router.push('Login');
        }
    }
};
</script>
