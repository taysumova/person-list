<template>
  <div class="preloader">
    <span class="preloader--inner"></span>
  </div>
</template>

<script>
export default {
  name: "preloader"
};
</script>

<style lang="scss">
@import "../../../assets/styles/vars";

.preloader {
  display: flex;
  width: 100%;
  overflow: hidden;
  &--inner {
    border: 10px solid $bg-color;
    border-radius: 50%;
    border-bottom: 10px solid $accent;
    border-top: 10px solid $accent;
    display: block;
    width: 60px;
    height: 60px;
    margin: 3rem auto;
    animation: spin 2s linear infinite;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
