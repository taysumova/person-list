<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <base-header class="base__header--guest">
    <template v-slot:mobile-menu>
      <span
        v-if="!isNavActive"
        class="guest__navigation--mobile"
        @click="isNavActive = true"
      ></span>
    </template>
    <button
      v-show="isNavActive"
      class="mobile-menu--close-btn"
      @click="isNavActive = false"
    ></button>
    <ul
      class="guest__navigation navigation"
      :class="isNavActive ? 'guest__navigation--active' : ''"
    >
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
    <language-change />
  </base-header>
</template>

<script>
import BaseHeader from "./BaseHeader.vue";
import LanguageChange from "./Language.vue";

export default {
  name: "guest-header",
  components: {
    BaseHeader,
    LanguageChange
  },
  data() {
    return {
      // for mobile nav
      isNavActive: false,
      routes: [
        {
          name: "register",
          path: "/register"
        },
        {
          name: "login",
          path: "/login"
        }
      ]
    };
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="scss">
.guest__navigation {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  white-space: nowrap;
  @media screen and (max-width: 1150px) {
    display: none;
  }
  &--active {
    @media screen and (max-width: 1150px) {
      background: #32aaeb;
      position: fixed;
      display: flex !important;
      flex-direction: column;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1rem;
      height: 100%;
      width: 100%;
      z-index: 100;
      animation-name: fadeInLeft;
      animation-duration: 0.5s;
      animation-timing-function: cubic-bezier(0.25, 0.8, 0.6, 1);
      .navigation__item {
        margin: 10px !important;
      }
    }
  }
  &--mobile {
    background: url("../../assets/icons/menu.svg") no-repeat;
    background-size: cover;
    display: none;
    width: 30px;
    height: 30px;
    margin-right: 10%;
    @media screen and (max-width: 1150px) {
      display: block;
    }
  }
  .navigation {
    &__item {
      border-bottom: 3px solid transparent;
      margin: 20px;
      &--active {
        border-bottom: 3px solid #fff;
      }
      a {
        font-weight: 600;
        font-size: 14px;
        color: #fff;
        padding: 3px;
        line-height: 34px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
.base__header--guest {
  @media screen and (max-width: 415px) {
    height: 60px;
    padding: 0 20px;
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
