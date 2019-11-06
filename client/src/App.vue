<template>
  <div id="app">
    <h1>New deploy</h1>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "assets/base.scss";

#app {
  font-family: Abel, sans-serif;
  font-size: 14px;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 320px;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
