<template>
  <button class="profile__btn--logout" @click="logout">
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
          path: "/"
        });
      } catch (e) {
        // console.log(e);
      }
    }
  }
};
</script>

<style lang="scss">
.profile {
  &__btn--logout {
    border-top: 1px solid #a9a9a9;
    padding-top: 1rem;
    padding-right: 2rem;
    line-height: 20px;
    text-align: right;
    outline: none;
  }
}
</style>
