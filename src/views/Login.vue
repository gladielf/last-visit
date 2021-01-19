<template lang="pug">
.login.view
    img.login__icon(src="../assets/padlock.svg")
    form.login__form(novalidate, v-on:submit.prevent)
        lv-input(
            placeholder="Email",
            type="email",
            validations="email|required",
            name="email",
            label="E-mail"
            id="login-email",
            @lv-input-value="setValue($event, 'email')")
        lv-input(
            placeholder="password",
            type="password",
            validations="required",
            name="password",
            label="Password"
            id="login-pass",
            @lv-input-value="setValue($event, 'password')")
        p.login__error(v-if="loginError") {{ loginError }}
        lv-button.lv-button--dark.login__form-button(type="submit" text="Log In", max-width, @lv-button-clicked="login" :disableButton="disableButton")
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import LvInput from '@/components/lv-input.vue';

export default {
    name: 'Login',
    components: {
        LvInput
    },
    data () {
        return {
            email: '',
            password: '',
            lastSignIn: 0,
            loginError: ''
        };
    },
    computed: {
        disableButton () {
            return this.email === '' || this.password === '' || !!this.errors.items.length;
        }
    },
    methods: {
        /* istanbul ignore next */
        login () {
            firebase.auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    const lastSignIn = new Date(data.user.metadata.lastSignInTime).getTime();

                    const dbRef = firebase.database().ref(`Users/${data.user.uid}`);

                    dbRef.on('value', (snapshot) => {
                        if (!snapshot.exists() || !snapshot.val().lastSignIn) {
                            dbRef.set({ lastSignIn });
                        }
                    });

                    this.$router.push('home');
                })
                .catch(err => {
                    this.loginError = err.message;
                });
        },
        setValue (payload, dataType) {
            this[dataType] = payload;
        }
    }
};
</script>

<style lang="sass">
.login
    align-items: center,
    display: flex,
    flex-direction: column

    &__icon
        height: 4em,
        width: 4em

    &__form
        margin-top: 2em,
        width: 13em

    &__form-button
        margin-top: 1.5em

    &__error
        color: #ff6868,
        font-size: 0.75em,
        margin: 0,
        padding: 0

</style>
