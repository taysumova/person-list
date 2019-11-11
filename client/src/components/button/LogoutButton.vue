<template>
  <button class="btn--logout" @click="logout">
    {{ $t("logout") }}
  </button>
</template>
<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "logout-button",
  methods: {
    async logout() {
      try {
        await AuthenticationService.logout();
        await this.$store.dispatch("logout");
        await this.$router.push({
          name: "login"
        });
      } catch (e) {
        // console.log(e);
      }
    }
  }
};
</script>

<style lang="scss">
.btn--logout {
  background: url("../../assets/icons/exit.svg") no-repeat right bottom;
  padding: 0 1.5rem 0 0.5rem;
  text-transform: uppercase;
  outline: none;
  &:hover,
  &:active {
    opacity: 0.7;
  }
}
</style>
