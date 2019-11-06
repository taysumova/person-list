<template>
  <div class="login">
    <v-form ref="form" v-model="valid" lazy-validation class="login__form">
      <v-text-field
        v-model="username"
        :rules="nameRules"
        :label="$t('forms.loginLabel')"
        required
      ></v-text-field>

      <v-text-field
        primary
        v-model="password"
        type="password"
        :rules="passwordRules"
        :label="$t('forms.password')"
        required
      ></v-text-field>

      <p class="error-block">
        {{ error }}
      </p>

      <button class="login__btn" @click.prevent="login">
        {{ $t("forms.submit") }}
      </button>
      <slot> </slot>
    </v-form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "login-form",
  data() {
    return {
      username: "",
      password: "",
      error: "",
      valid: false,
      nameRules: [v => !!v || this.$t("rules.required")],
      passwordRules: [
        v => !!v || this.$t("rules.required"),
        v =>
          /(?=.{8,})(?=.*?[0-9])(?=.*?[A-Z]).*?[a-z].*/.test(v) ||
          this.$t("rules.password")
      ]
    };
  },
  methods: {
    async login() {
      try {
        this.error = "";
        if (this.$refs.form.validate()) {
          const res = await AuthenticationService.login({
            email: this.username,
            password: this.password
          });
          if (res.data) {
            const { token } = res.data.success;
            await this.$store.dispatch("setToken", token);
          } else {
            this.error = "Error occurred during Login";
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss">
.login {
  margin: 0 auto;
  &__form {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 5px 5px 24px rgba(80, 80, 80, 1);
    padding: 20px;
    width: 320px;
    text-align: center;
  }
  &__btn {
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid rgba(50, 170, 235, 1);
    border-radius: 24px;
    color: rgba(50, 170, 235, 1);
    padding: 10px 20px;
    text-transform: uppercase;
    margin-top: 20px;
    min-width: 100px;
    cursor: pointer;
    outline: none;
    &:hover,
    &:active {
      background: rgba(50, 170, 235, 1);
      color: #fff;
    }
  }
}
</style>
