<template>
  <div class="select__container">
    <div
      class="select__title"
      @click="isSelectOpen = !isSelectOpen"
      :class="isSelectOpen ? 'select__title--active' : ''"
    >
      <slot>
        Select option
      </slot>
    </div>
    <div
      v-show="isSelectOpen"
      class="select__content"
      @click="isSelectOpen = false"
    >
      <slot name="content">
        <span class="select__item">
          No content
        </span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "select-input",
  data() {
    return {
      isSelectOpen: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
.select {
  &__container {
    position: relative;
    margin: 1rem;
    @media screen and (max-width: 360px) {
      margin: 0 0 1rem;
    }
  }
  &__title {
    background: #fff;
    width: 300px;
    display: block;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    position: relative;
    cursor: pointer;
    padding: 1rem 2rem 1rem 1rem;
    word-break: keep-all;
    min-height: 49px;
    &:after {
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid #45b4e4;
      content: "";
      position: absolute;
      margin: 1.3rem 1rem;
      top: 0;
      right: 0;
      height: 0;
      width: 0;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    }
    &--active {
      &:after {
        transform: rotate(180deg);
        transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
      }
    }
  }
  &__content {
    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
    will-change: box-shadow;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    top: 50px;
    left: 0;
    position: absolute;
    overflow-y: auto;
    width: 300px;
    z-index: 15;
    margin-bottom: 60px;
    max-height: 40vh;
  }
  &__item {
    background: #fff;
    transition: background 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    padding: 1rem;
    word-break: keep-all;
    cursor: pointer;
    &:hover,
    &:active {
      background: #44b4e4;
    }
  }
}
</style>
