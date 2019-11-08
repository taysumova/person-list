<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <base-header class="app-header">
    <template v-slot:mobile-menu>
      <span
        v-if="!isNavActive"
        class="app-header__navigation--mobile"
        @click="isNavActive = true"
      ></span>
    </template>
    <button
      v-show="isNavActive"
      class="mobile-menu--close-btn"
      @click="isNavActive = false"
    ></button>
    <app-mobile-nav
      :is-nav-active="isNavActive"
      @closeNav="isNavActive = false"
    />
    <div class="app-header__navigation">
      <ul class="app__navigation navigation">
        <li
          v-for="(item, index) in routes"
          :key="index"
          class="navigation__item"
          @click="isNavActive = false"
          :class="activeRoute === item.path ? 'navigation__item--active' : ''"
        >
          <router-link :to="item.path">
            {{ $t(`${item.name}`) }}
          </router-link>
        </li>
      </ul>
    </div>
    <language-change />
    <header-profile class="app-header__profile" />
  </base-header>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import LanguageChange from "./Language.vue";
import HeaderProfile from "./AppHeader/Profile.vue";
import AppMobileNav from "./AppHeader/AppMobileNav.vue";

export default {
  name: "app-header",
  data() {
    return {
      isNavActive: false,
      routes: [
        {
          name: "search",
          path: "/search"
        }
      ]
    };
  },
  components: {
    AppMobileNav,
    BaseHeader,
    LanguageChange,
    HeaderProfile
  },
  computed: {
    activeRoute() {
      return this.$route.name;
    }
  }
};
</script>

<style lang="scss">
.app-header {
  box-shadow: 0 6px 6px -6px #44b4e4;
  background: #44b4e4;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  @media screen and (max-width: 415px) {
    height: 60px;
    padding: 0 20px;
  }
  &__navigation {
    margin: 0 3rem;
    @media screen and (max-width: 1110px) {
      display: none !important;
    }
    &--mobile {
      background: url("../../assets/icons/menu.svg") no-repeat;
      background-size: cover;
      display: none;
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-right: 1rem;
      @media screen and (max-width: 1110px) {
        display: block;
      }
    }
  }
  .navigation__item a {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
    display: block;
    &:hover,
    &:active {
      text-decoration: underline;
      opacity: 0.7;
    }
    &--active {
      color: #000;
    }
  }
}

.mobile-menu--close-btn {
  background: url("../../assets/icons/close.svg");
  background-size: contain;
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 20px;
  width: 20px;
  z-index: 150;
  animation-name: fadeInLeft;
  animation-duration: 0.5s;
  animation-timing-function: cubic-bezier(0.25, 0.8, 0.6, 1);
}
</style>
