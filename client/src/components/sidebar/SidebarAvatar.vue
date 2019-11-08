<template>
  <div class="sidebar__avatar avatar">
    <img
      :src="user.avatar ? user.avatar : require(`@/assets/icons/avatar.svg`)"
      :class="user.avatar ? '' : 'avatar__icon'"
      alt="avatar"
    />
    <label class="avatar-download">
      {{ $t("update") }}
      <input type="file" accept="image/*" @change="handleAvatar" />
    </label>
    <v-snackbar v-model="error" top left :timeout="5000" class="error-block">
      ERROR
      <button @click="error = false">
        <img src="@/assets/icons/close.svg" alt="close" />
      </button>
    </v-snackbar>
    <v-snackbar
      v-model="success"
      top
      left
      :timeout="5000"
      class="success-block"
    >
      SUCCESS
      <button @click="success = false">
        <img src="@/assets/icons/close.svg" alt="close" />
      </button>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState } from "vuex";
import UserService from "@/services/UserService";

export default {
  name: "sidebar-avatar",
  data() {
    return {
      success: false,
      error: false,
      avatar: ""
    };
  },
  computed: {
    ...mapState(["user"])
  },
  methods: {
    async handleAvatar(e) {
      try {
        if (typeof FileReader === "function") {
          const reader = new FileReader();
          reader.onload = async event => {
            this.avatar = event.target.result;
            // send whole object of user to avoid delete other properties
            await UserService.updateProfile({
              ...this.user,
              avatar: this.avatar
            });
            await this.$store.dispatch("setUserAvatar", this.avatar);
            this.success = true;
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      } catch (err) {
        this.error = true;
      }
    }
  }
};
</script>

<style lang="scss">
.sidebar {
  &__avatar {
    background: #44b4e4;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    margin: 10px auto 30px;
    width: 179px;
    height: 179px;
    position: relative;
    @media screen and (max-width: 1110px) {
      margin: 10px 0;
      width: 139px;
      height: 139px;
    }
    &:hover .avatar-download {
      visibility: visible !important;
    }
    &:active .avatar-download {
      visibility: visible !important;
    }
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
.avatar {
  &__icon {
    width: 50%;
    height: 50%;
  }
  input[type="file"] {
    display: none;
  }
  .avatar-download {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid transparent;
    border-bottom-left-radius: 100% 200%;
    border-bottom-right-radius: 100% 200%;
    bottom: 0;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    padding: 39px 0 10px;
    text-align: center;
    position: absolute;
    width: 179px;
    height: 90px;
    z-index: 120;
    visibility: hidden;
    @media screen and (max-width: 1110px) {
      width: 139px;
      height: 70px;
    }
    &:before {
      background: url("../../assets/icons/camera.svg") 50% center no-repeat;
      content: "";
      position: absolute;
      top: 10px;
      left: calc(50% - 12px);
      width: 24px;
      height: 24px;
    }
  }
}
</style>
