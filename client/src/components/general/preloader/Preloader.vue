<template>
  <div class="preloader">
    <span
      class="preloader__inner"
      :class="small ? 'preloader__inner--small' : 'preloader__inner--default'"
    ></span>
  </div>
</template>

<script>
export default {
  name: "preloader",
  props: ["small"]
};
</script>

<style lang="scss">
@import "../../../assets/styles/vars";

.preloader {
  display: flex;
  width: 100%;
  overflow: hidden;
  &__inner {
    border: 10px solid $bg-color;
    border-radius: 50%;
    border-bottom-color: $accent;
    border-top-color: $accent;
    display: block;
    animation: spin 2s linear infinite;
    &--default {
      margin: 3rem auto;
      width: 60px;
      height: 60px;
    }
    &--small {
      margin: 8px auto;
      border-width: 5px;
      width: 30px;
      height: 30px;
    }
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
