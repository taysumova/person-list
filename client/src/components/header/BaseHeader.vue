<template>
  <header class="base-header">
    <slot name="mobile-menu"></slot>
    <router-link to="/">
      <img src="@/assets/logo.svg" alt="logo" class="logo" height="90" />
    </router-link>
    <div class="base-header__content">
      <slot></slot>
    </div>
    <language-change />
  </header>
</template>

<script>
import LanguageChange from "./Language";
export default {
  name: "base-header",
  components: { LanguageChange }
};
</script>

<style lang="scss">
.base-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-right: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 50;
  &__content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}
</style>
