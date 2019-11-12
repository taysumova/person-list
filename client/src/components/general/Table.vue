<template>
  <div class="table">
    <h4 class="table__header">
      {{ title }}
      <button class="table__add-btn" @click="$emit('add-item')"></button>
    </h4>
    <preloader class="table__content" v-if="status === 'loading'" />
    <div v-else-if="status.message" class="table__content">
      <p class="error-text">
        {{ status.message }}
      </p>
    </div>
    <ul v-else class="table__content content">
      <li
        v-for="(item, index) in content"
        :key="index"
        class="content__item"
        @click="$emit('open-item', item._id)"
      >
        {{ item[contentPath] }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "app-table",
  props: ["title", "content", "contentPath", "status"]
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";

.table {
  max-width: 400px;
  max-height: 700px;
  overflow-y: auto;
  width: 100%;
  margin: 1rem;
  &__header {
    background: $dark-accent;
    color: $base-color;
    font-size: 1.4rem;
    font-weight: normal;
    padding: 0.6rem 1rem;
    position: relative;
    margin-top: 0.5rem;
  }
  &__add-btn {
    background: $base-color url("../../assets/icons/add.svg") no-repeat center;
    box-shadow: $btn-box-shadow;
    border-radius: 50%;
    position: absolute;
    right: 1rem;
    top: -0.2rem;
    width: 3.2rem;
    height: 3.2rem;
    z-index: 5;
    &:hover,
    &:active {
      background-color: #f5f5f5;
      transition: background-color 0.2s ease-in;
    }
  }
  &__content {
    background: $base-color;
    color: $dark-accent;
    font-size: 1rem;
    padding: 0.5rem 1rem 2rem;
  }
  .content {
    &__item {
      border-bottom: 1px solid #000;
      line-height: 3rem;
      &:hover,
      &:active {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
}
</style>
