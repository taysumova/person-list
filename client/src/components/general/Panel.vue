<template>
  <div class="panel">
    <button class="btn--back" @click="$router.go(-1)">
      {{ $t("goBack") }}
    </button>
    <slot name="avatar"></slot>
    <h4 class="panel__header">
      {{ title }}
    </h4>
    <div v-if="actions" class="panel__actions">
      <button class="btn-circle btn-circle--edit" @click="editAction"></button>
      <button
        class="btn-circle btn-circle--delete"
        @click="deleteAction"
      ></button>
    </div>
    <div class="panel__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-table",
  props: ["title", "status", "actions"],
  data() {
    return {
      deleteMode: false
    };
  },
  methods: {
    editAction() {
      this.$router.push({ path: `${this.$route.params.id}/edit` });
    },
    deleteAction() {
      this.deleteMode = true;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";

.panel {
  background: $base-color;
  margin: 1rem auto;
  padding: 0 1.5rem;
  max-width: 600px;
  width: 100%;
  position: relative;
  &__header {
    color: $dark-accent;
    font-size: 1.4rem;
    font-weight: normal;
    text-transform: uppercase;
    padding: 0.8rem 0;
    position: relative;
    &:after {
      background-color: $dark-accent;
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100px;
      height: 3px;
    }
  }
  &__actions {
    position: absolute;
    top: 0.3rem;
    right: 1rem;
  }
  &__content {
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
