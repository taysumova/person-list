<template>
  <div v-if="open" class="confirm-modal">
    <div class="confirm-modal__inner">
      <p v-html="text" class="confirm-modal__text"></p>
      <div class="confirm-modal__btn-wrapper">
        <button
          class="confirm-modal__btn confirm-modal__btn--yes"
          @click="$emit('confirm-action')"
        >
          {{ $t("yes") }}
        </button>
        <button
          class="confirm-modal__btn confirm-modal__btn--no"
          @click="$emit('cancel-action')"
        >
          {{ $t("no") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "confirm-modal",
  props: ["open", "text"]
};
</script>

<style lang="scss">
@import "../../../assets/styles/mixins";

.confirm-modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  &__inner {
    background: #fff;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    margin-bottom: 80px;
    max-width: 600px;
  }
  &__text {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
  &__btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__btn {
    &--yes {
      @include button($error);
    }
    &--no {
      @include button($textGray);
    }
  }
}
</style>
