<template>
  <header class="base-header">
    <router-link class="logo" to="/">
      <img
        src="@/assets/logo.svg"
        alt="logo"
        class="logo__img logo__img--large"
        height="80"
      />
      <img
        src="@/assets/logo-short.svg"
        alt="logo"
        class="logo__img logo__img--small"
        height="80"
      />
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
  padding-right: 20px;
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
    height: 100%;
    overflow: hidden;
    :hover,
    :active {
      opacity: 0.7;
    }
    &__img {
      &--large {
        margin-left: -1.5rem;
        margin-top: -5px;
        @media screen and (max-width: 453px) {
          display: none;
        }
      }
      &--small {
        margin-left: -1rem;
        margin-top: -10px;
        display: none;
        @media screen and (max-width: 453px) {
          display: block;
        }
      }
    }
  }
}
</style>
