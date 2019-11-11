<template>
  <div class="language">
    <div class="language__header" @click="isOpen = !isOpen">
      {{ lang }}
    </div>
    <div v-show="isOpen" class="language__content">
      <div
        v-for="entry in languages"
        :key="entry.title"
        @click="changeLocale(entry.language)"
        class="language__item"
      >
        {{ entry.title }}
      </div>
    </div>
  </div>
</template>

<script>
import { languagesConfig } from "@/locales/index";

export default {
  name: "language-change",
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    languages() {
      return languagesConfig.languages;
    },
    lang() {
      const currentLang = this.languages.filter(
        lang => lang.language === this.$i18n.locale
      );
      return currentLang[0].title[0] + currentLang[0].title[1];
    }
  },
  methods: {
    async changeLocale(locale) {
      this.$i18n.locale = locale;
      await this.$store.dispatch("setLocale", locale);
      this.isOpen = false;
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/base";

.language {
  position: relative;
  margin: 0 0.3rem;
  &__header {
    color: #fff;
    cursor: pointer;
    padding-right: 1.5rem;
    position: relative;
    text-transform: uppercase;
    &:hover,
    &:active {
      opacity: 0.7;
    }
    &:after {
      background: url("../../assets/icons/lang.svg") no-repeat;
      content: "";
      position: absolute;
      top: 0;
      right: 0.1rem;
      width: 18px;
      height: 18px;
    }
  }
  &__content {
    background: #fff;
    border-radius: 7px;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.192);
    color: $accent;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1.5rem;
    right: 0;
    padding: 1rem;
    z-index: 25;
  }
  &__item {
    cursor: pointer;
    padding: 0.2rem;
    &:hover,
    &:active {
      opacity: 0.7;
      text-decoration: underline;
    }
  }
}
</style>
