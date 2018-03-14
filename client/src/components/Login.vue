<template>
  <div>
    <b-form @submit="login" @reset="reset" v-if="show">
      <b-form-group id="emailGroup"
                    label="Email address:"
                    label-for="emailInput">
        <b-form-input id="emailInput"
                      type="email"
                      v-model="loginForm.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordGroup"
                    label="Password:"
                    label-for="passwordInput">
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="loginForm.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticaitonService'
export default {
    data () {
        return {
            loginForm: {
                email: '',
                password: ''
            },
            show: true,
            error: null
        }
    },
    methods: {
        async login () {
            try {
                const response = await AuthenticationService.login({
                    email: this.loginForm.email,
                    password: this.loginForm.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                // this.$router.push({
                //     name: 'HelloWorld'
                // })
            } catch (error) {
                this.error = error.response.data.error
            }
        },
        reset (e) {
            e.preventDefault()
            this.loginForm.email = ''
            this.loginForm.password = ''
            this.loginForm.checked = false
        }

    // onSubmit (evt) {
    //   evt.preventDefault();
    //   alert(JSON.stringify(this.form));
    // },
    // onReset (evt) {
    //   evt.preventDefault();
    //   /* Reset our form values */
    //   this.form.email = '';
    //   this.form.name = '';
    //   this.form.food = null;
    //   this.form.checked = [];
    //   /* Trick to reset/clear native browser form validation state */
    //   this.show = false;
    //   this.$nextTick(() => { this.show = true });
    // }
    }
}
</script>
