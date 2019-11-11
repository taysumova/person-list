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
@import "../../assets/base";

.panel {
  margin: 1rem;
  &__header {
    background: $base-color;
    color: $dark-accent;
    font-size: 1.4rem;
    font-weight: normal;
    padding: 0.8rem 1rem;
  }
  &__content {
    /* background: $base-color;
    color: $dark-accent; */
    font-size: 1rem;
    padding: 0.5rem 1rem 2rem;
  }
}
</style>
