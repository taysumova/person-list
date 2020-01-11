<template>
  <div v-if="status" class="modal">
    <div class="modal__inner">
      <button class="btn--close" @click="$emit('close-modal')"></button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ["status"]
};
</script>

<style lang="scss">
@import "../../../assets/styles/vars";
.modal {
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
  transition: all 0.3s ease-in;
  &__inner {
    background: #fff;
    border-radius: 8px;
    padding: 2rem 1rem;
    text-align: center;
    margin-bottom: 80px;
    max-width: 500px;
    width: 90%;
    position: relative;
  }
  .btn--close {
    background: url("../../../assets/icons/close.svg") no-repeat center;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: -20px;
  }
}
</style>
