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
@import "assets/styles/base";

#app {
  background-color: rgba($bg-color, 80%);
  font-family: Abel, sans-serif;
  font-size: 14px;
  position: relative;
  min-height: 100%;
  width: 100%;
  min-width: 320px;
}
</style>
