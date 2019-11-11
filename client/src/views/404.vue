<template>
  <div class="not-found">
    <span class="not-found__status">
      404
    </span>
    <p class="not-found__text">
      Page not found &#128577;
    </p>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import "../assets/base.scss";

.not-found {
  background: $bg-color;
  color: $base-color;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__status {
    font-weight: 600;
    font-size: 94px;
    text-shadow: 2px 2px 4px #000;
  }
  &__text {
    font-size: 32px;
  }
}
</style>
