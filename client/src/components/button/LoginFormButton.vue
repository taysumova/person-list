<template>
  <div class="login-form-btn">
    <button class="profile__btn--login" @click="loginIsOpen = true">
      {{ $t("login") }}
    </button>
    <div v-if="loginIsOpen" class="login-modal">
      <login-form>
        <button class="close-btn" @click="loginIsOpen = false">
          <img src="@/assets/icons/close-dark.svg" alt="close" />
        </button>
        <router-link class="register-link" to="/register">
          Do not have account yet? Register ->
        </router-link>
      </login-form>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/views/Login.vue";

export default {
  name: "login-form-button",
  components: {
    LoginForm
  },
  data() {
    return {
      loginIsOpen: false
    };
  }
};
</script>

<style lang="scss">
.login-form-btn {
  .profile__btn--login {
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    &:hover,
    &:active {
      opacity: 0.7;
    }
  }
}
.login-modal {
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  z-index: 200;
  .register-link {
    display: block;
    margin-top: 1rem;
    text-transform: none;
    &:active,
    &:hover {
      text-decoration: underline;
    }
  }
  .login {
    position: relative;
  }
  .close-btn {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }
}
</style>
