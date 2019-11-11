<template>
  <div id="app">
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
}
</style>
