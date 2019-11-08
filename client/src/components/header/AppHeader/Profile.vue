<template>
  <div v-if="isUserAuth" class="header__profile profile">
    <img
      :src="user.avatar ? user.avatar : require(`@/assets/icons/avatar.svg`)"
      alt="avatar"
      @click="isOpen = !isOpen"
      :class="user.avatar ? '' : 'profile__img--empty'"
      class="profile__img"
    />
    <div v-show="isOpen" @click="isOpen = false" class="profile__content">
      <router-link
        v-for="(item, index) in routes"
        :key="index"
        class="profile__route"
        :to="{ name: item }"
      >
        {{ $t(`${item}`) }}
      </router-link>
      <logout-button />
    </div>
  </div>
  <login-form-button v-else class="header__profile" />
</template>

<script>
import { mapState } from "vuex";
import LogoutButton from "@/components/button/LogoutButton.vue";
import LoginFormButton from "@/components/button/LoginFormButton.vue";

export default {
  name: "header-profile",
  components: {
    LoginFormButton,
    LogoutButton
  },
  data() {
    return {
      isOpen: false,
      routes: ["profile", "qualifications", "trajectories"]
    };
  },
  computed: {
    isUserAuth() {
      return !!this.token;
    },
    ...mapState(["user", "token"])
  }
};
</script>

<style lang="scss">
.header__profile {
  margin-left: 20px;
  position: relative;
  @media screen and (max-width: 1110px) {
    display: none !important;
  }
  .profile {
    &__img {
      border-radius: 50%;
      padding: 0.3rem;
      cursor: pointer;
      width: 50px;
      height: 50px;

      &:hover,
      &:active {
        opacity: 0.7;
      }

      &--empty {
        border: 2px solid #fff;
        width: 38px;
        height: 38px;
      }
    }

    &__content {
      background: #fff;
      box-shadow: 0 0 11px rgba(0, 0, 0, 0.192);
      display: flex;
      flex-direction: column;
      top: 70px;
      right: 0;
      padding: 1rem;
      position: absolute;
      width: 200px;
      z-index: 15;
    }

    &__route {
      font-weight: 600;
      color: #000;
      padding: 0.5rem 0;
      text-transform: uppercase;

      &:hover,
      &:active {
        color: #32aaeb;
        text-decoration: underline;
      }
    }
  }
}
</style>
