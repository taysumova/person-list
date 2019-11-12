<template>
  <base-header class="app-header">
    <language-change /> |
    <logout-button />
  </base-header>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import LanguageChange from "./Language";
import LogoutButton from "../button/LogoutButton";

export default {
  name: "app-header",
  data() {
    return {};
  },
  components: {
    LogoutButton,
    LanguageChange,
    BaseHeader
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";
.app-header {
  box-shadow: 0 6px 6px -6px $bg-color;
  background: $bg-color;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  min-width: 320px;
  @media screen and (max-width: 453px) {
    height: 60px;
    padding: 0 20px;
  }
}
</style>
