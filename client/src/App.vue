<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

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
  text-align: center;
  h1 {
    color: $accent;
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
