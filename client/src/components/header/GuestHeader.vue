<template>
  <base-header class="base__header--guest">
    <language-change />
  </base-header>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import LanguageChange from "./Language";

export default {
  name: "guest-header",
  components: {
    LanguageChange,
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
