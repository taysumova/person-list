<template>
  <header class="base-header">
    <router-link class="logo" to="/">
      <img src="@/assets/logo.svg" alt="logo" class="logo__img" height="80" />
    </router-link>
    <div class="base-header__content">
      <slot></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: "base-header"
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
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .logo {
    height: 80px;
    overflow: hidden;
    &__img {
      margin-left: -1.5rem;
      margin-top: -5px;
    }
  }
}
</style>
