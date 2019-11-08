<template>
  <div
    class="app__mobile-navigation"
    :class="isNavActive ? 'app__mobile-navigation--active' : ''"
  >
    <sidebar-avatar v-if="isUserAuth" />
    <ul>
      <li
        v-for="(item, index) in isUserAuth ? authRoutes : notAuthRoutes"
        :key="index"
        class="navigation__item"
        @click="closeNav"
        :class="activeRoute === item.path ? 'navigation__item--active' : ''"
      >
        <router-link :to="item.path">
          {{ $t(`${item.name}`) }}
        </router-link>
      </li>
      <li v-if="isUserAuth">
        <logout-button />
      </li>
      <li v-else>
        <login-form-button />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import LogoutButton from "@/components/button/LogoutButton.vue";
import LoginFormButton from "@/components//button/LoginFormButton.vue";
import SidebarAvatar from "@/components/sidebar/SidebarAvatar.vue";

export default {
  name: "app-mobile-nav",
  props: ["isNavActive"],
  data() {
    return {
      authRoutes: [
        {
          name: "search",
          path: "/search"
        },
        {
          name: "profile",
          path: "/user/profile"
        },
        {
          name: "qualifications",
          path: "/user/qualifications"
        },
        {
          name: "trajectories",
          path: "/user/trajectories"
        }
      ],
      notAuthRoutes: [
        {
          name: "search",
          path: "/search"
        }
      ]
    };
  },
  components: {
    SidebarAvatar,
    LoginFormButton,
    LogoutButton
  },
  computed: {
    activeRoute() {
      return this.$route.name;
    },
    isUserAuth() {
      return !!this.token;
    },
    ...mapState(["token"])
  },
  methods: {
    closeNav() {
      this.$emit("closeNav");
    }
  }
};
</script>

<style lang="scss">
.app__mobile-navigation {
  background: #32aaeb;
  display: none;
  position: fixed;
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
  &--active {
    display: block;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
    white-space: nowrap;
    text-transform: uppercase;
  }
  li:last-of-type {
    padding: 1rem;
  }
  .navigation {
    &__item {
      border-bottom: 3px solid transparent;
      margin: 5px 10px;
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
      .profile__btn--logout {
        margin-left: 1rem;
      }
    }
  }
}
</style>
