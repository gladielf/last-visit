<template lang="pug">
.login.view
    img.login__icon(src="../assets/padlock.svg")
    form.login__form(novalidate)
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
        lv-button.lv-button--dark.login__form-button(text="Log In", max-width, @lv-button-clicked="login" :disableButton="disableButton")
</template>

<script>
import firebase from 'firebase';
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
            lastSignIn: 0
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
                    const lastSignInTime = data.user.metadata.lastSignInTime;
                    const lastSignIn = new Date(lastSignInTime).getTime();

                    const dbRef = firebase.database().ref(`Users/${data.user.uid}`);

                    dbRef.on('value', (snapshot) => {
                        if (!snapshot.exists() || !snapshot.val().lastSignIn) {
                            dbRef.set({ lastSignIn, lastSignInTime });
                        }
                    });

                    this.$router.push('Home');
                })
                .catch(err => {
                    console.log(err);
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
    display: flex,
    flex-direction: column,
    align-items: center

    &__icon
        height: 4em,
        width: 4em

    &__form
        width: 13em,
        margin-top: 2em

    &__form-button
        margin-top: 1.5em

</style>
