<template lang="pug">
    #app
        router-view
</template>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap')

body
    margin: 0,
    padding: 0
    width: 100vw,
    height: 100vh

#app
    font-family: 'Roboto', sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #919192,
    width: 100vw,
    height: 100vh

.view
    display: flex,
    flex-direction: column,
    align-items: center,
    justify-content: center,
    width: 100vw,
    height: 100vh

.hidden
    position: absolute,
    height: 0,
    opacity: 0,
    pointer-events: none
</style>
