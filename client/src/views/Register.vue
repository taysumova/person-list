<template>
  <div class="register">
    <div class="register__text">
      <h4 class="text__title">
        {{ $t("registerPage.title") }}
      </h4>
      <p class="text__content">
        {{ $t("registerPage.text") }}
      </p>
    </div>
    <v-form ref="form" v-model="valid" lazy-validation class="register__form">
      <v-text-field
        v-model="username"
        :rules="nameRules"
        :label="$t('forms.login')"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        :label="$t('forms.email')"
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

      <p class="error-block">
        {{ error }}
      </p>

      <button class="register__btn" @click.prevent="register">
        {{ $t("forms.submit") }}
      </button>
    </v-form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
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
          await AuthenticationService.register({
            email: this.email,
            password: this.password,
            login: this.username
          });
          await this.$router.push({ name: "login" });
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style lang="scss">
.register {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  max-width: 1200px;
  &__text {
    color: #fff;
  }
  .text {
    &__title {
      font-weight: 700;
      font-size: 48px;
      text-transform: uppercase;
      line-height: 60px;
      letter-spacing: 0.1em;
      max-width: 650px;
      margin-bottom: 54px;
      position: relative;
      &:after {
        background: #fff;
        content: "";
        position: absolute;
        bottom: -27px;
        left: 0;
        width: 39px;
        height: 4px;
      }
    }
    &__content {
      font-size: 12px;
      line-height: 22px;
      letter-spacing: 0.1em;
      max-width: 476px;
      margin-bottom: 54px;
    }
  }
  &__form {
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 5px 5px 24px rgba(80, 80, 80, 1);
    text-align: center;
    padding: 20px;
    width: 320px;
  }
  &__btn {
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid rgba(50, 170, 235, 1);
    border-radius: 24px;
    color: rgba(50, 170, 235, 1);
    padding: 10px 20px;
    text-transform: uppercase;
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
