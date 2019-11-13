<template>
  <div class="panel">
    <h4 class="panel__header">
      {{ title }}
    </h4>
    <div class="panel__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-table",
  props: ["title", "status"]
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";

.panel {
  background: $base-color;
  margin: 1rem auto;
  padding: 0 1rem;
  max-width: 600px;
  width: 100%;
  &__header {
    color: $dark-accent;
    font-size: 1.4rem;
    font-weight: normal;
    text-transform: uppercase;
    padding: 0.8rem 1rem;
    position: relative;
    &:after {
      background-color: $dark-accent;
      content: "";
      position: absolute;
      left: 1rem;
      bottom: 0;
      width: 100px;
      height: 3px;
    }
  }
  &__content {
    font-size: 1rem;
  }
}
</style>
