<template>
  <div class="app">
    <app-header />
    <slot></slot>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "@/components/header/AppHeader.vue";
import AppFooter from "@/components/footer/AppFooter.vue";

export default {
  name: "app",
  components: {
    AppFooter,
    AppHeader
  }
};
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 80px;
  position: relative;
  width: 100%;
  min-height: 100%;
  min-width: 320px;
  @media screen and (max-width: 415px) {
    padding-top: 60px;
  }
}
</style>
