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
.language {
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  margin-left: 1rem;
  &__header {
    color: #fff;
    cursor: pointer;
    padding: 0.2rem 1.8rem 0.3rem 0.4rem;
    position: relative;
    text-transform: uppercase;
    &:hover,
    &:active {
      opacity: 0.7;
    }
    &:after {
      background: url("../../assets/icons/lang.svg");
      content: "";
      position: absolute;
      top: 0;
      right: 0.1rem;
      width: 24px;
      height: 24px;
    }
  }
  &__content {
    background: #fff;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.192);
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 1rem;
    width: 150px;
    z-index: 25;
  }
  &__item {
    cursor: pointer;
    padding: 0.2rem;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
}
</style>
