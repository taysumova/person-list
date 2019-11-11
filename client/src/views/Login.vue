<template>
  <v-form ref="form" v-model="valid" lazy-validation class="form form--login">
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
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

    <p class="error-text">
      {{ error }}
    </p>

    <button class="form__btn" @click.prevent="login">
      {{ $t("forms.submit") }}
    </button>
  </v-form>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "login-form",
  data() {
    return {
      email: "",
      password: "",
      error: "",
      valid: false,
      emailRules: [
        v => !!v || this.$t("rules.required"),
        v => /.+@.+/.test(v) || this.$t("rules.emailValid")
      ],
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
            email: this.email,
            password: this.password
          });
          const { token } = res.data;
          await this.$store.dispatch("setToken", token);
          await this.$router.push({ path: "/" });
          this.$forceUpdate();
        }
      } catch (e) {
        this.error = e.data || "Error during login";
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/base";

.form--login {
  box-shadow: 1px 1px 10px $base-color;
  margin: 1rem auto;
  width: 320px;
}
</style>
