<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="form form--register"
  >
    <v-text-field
      v-model="username"
      :rules="nameRules"
      :label="$t('forms.name')"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>

    <v-text-field
      type="password"
      v-model="password"
      :rules="passwordRules"
      persistent-hint
      :label="$t('forms.password')"
      required
    ></v-text-field>

    <v-text-field
      type="password"
      v-model="confirmPassword"
      :rules="confirmPasswordRules"
      :label="$t('forms.passwordLabel2')"
      required
    ></v-text-field>

    <p class="error-text">
      {{ error }}
    </p>

    <button class="form__btn" @click.prevent="register">
      {{ $t("forms.submit") }}
    </button>
  </v-form>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "register-form",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
      valid: false,
      nameRules: [v => !!v || this.$t("rules.required")],
      emailRules: [
        v => !!v || this.$t("rules.required"),
        v => /.+@.+/.test(v) || this.$t("rules.emailValid")
      ],
      passwordRules: [
        v => !!v || this.$t("rules.required"),
        v =>
          /(?=.{8,})(?=.*?[0-9])(?=.*?[A-Z]).*?[a-z].*/.test(v) ||
          this.$t("rules.password")
      ],
      confirmPasswordRules: [
        v => !!v || this.$t("rules.required"),
        v => v === this.password || this.$t("rules.passwordMatch")
      ]
    };
  },
  methods: {
    async register() {
      try {
        this.error = "";
        if (this.$refs.form.validate()) {
          const res = await AuthenticationService.register({
            name: this.username,
            email: this.email,
            password: this.password
          });
          const { token } = res.data;
          await this.$store.dispatch("setToken", token);
          await this.$router.push({ path: "/" });
          this.$forceUpdate();
        }
      } catch (e) {
        this.error = e.data || "Error during register";
      }
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/vars";

.form--register {
  box-shadow: 1px 1px 10px $base-color;
  margin: 1rem auto;
  width: 320px;
}
</style>
