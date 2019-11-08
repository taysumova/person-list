<template>
  <base-header class="base__header--guest"></base-header>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";

export default {
  name: "guest-header",
  components: {
    BaseHeader
  }
};
</script>

<style lang="scss">
.base__header--guest {
  @media screen and (max-width: 415px) {
    height: 60px;
    padding: 0 20px;
  }
}
</style>
