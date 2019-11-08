<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <component :is="layout">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </component>
  </div>
</template>

<script>
const defaultLayout = "default";

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || defaultLayout}-layout`;
    }
  }
};
</script>

<style lang="scss">
@import "assets/base.scss";

#app {
  background-color: $bg-color;
  font-family: Abel, sans-serif;
  font-size: 14px;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 320px;
  h1 {
    color: $accent;
  }
  .profile__btn--logout {
    background: url("./assets/icons/exit.svg") no-repeat right bottom;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $add-color;

    &.router-link-exact-active {
      color: $accent;
    }
  }
}
</style>
