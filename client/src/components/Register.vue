<template>
  <div>
    <b-form @submit="register" @reset="reset" v-if="show">
      <b-form-group id="emailGroup"
                    label="Email address:"
                    label-for="emailInput"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="emailInput"
                      type="email"
                      v-model="registerForm.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="passwordGroup"
                    label="Password:"
                    label-for="passwordInput">
        <b-form-input id="passwordInput"
                      type="password"
                      v-model="registerForm.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>

      <b-form-group id="submitGroup">
        <b-form-checkbox-group v-model="registerForm.checked" id="exampleChecks">
          <b-form-checkbox value="me"><b-link href="https://blog.vv3schools.com">I agree the term of use.</b-link></b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticaitonService'
export default {
    data () {
        return {
            registerForm: {
                email: '',
                password: '',
                checked: false
            },
            show: true,
            error: null
        }
    },
    methods: {
        async register () {
            try {
                const response = await AuthenticationService.register({
                    email: this.registerForm.email,
                    password: this.registerForm.password
                })
                this.$store.dispatch('setToken', response.data.token)
                this.$store.dispatch('setUser', response.data.user)
                // this.$router.push({
                //     name: 'HelloWorld'
                // })
                console.log(response)
            } catch (error) {
                this.error = error.response.data.error
            }
        },
        reset (e) {
            e.preventDefault()
            this.registerForm.email = ''
            this.registerForm.password = ''
            this.registerForm.checked = false
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
