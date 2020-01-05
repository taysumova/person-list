<template>
  <div class="sidebar__avatar avatar">
    <img v-if="photo" :src="photo" alt="avatar" />
    <img
      v-else
      :src="image ? image : require(`@/assets/icons/avatar.svg`)"
      :class="image ? '' : 'avatar__icon'"
      alt="avatar"
    />
    <label class="avatar-download">
      {{ $t("update") }}
      <input type="file" accept="image/*" @change="handleImage" />
    </label>
  </div>
</template>

<script>
export default {
  name: "image-upload",
  props: ["photo"],
  data() {
    return {
      image: ""
    };
  },
  methods: {
    async handleImage(e) {
      try {
        if (typeof FileReader === "function") {
          const reader = new FileReader();
          reader.onload = async event => {
            this.image = event.target.result;
            this.$emit("image-load", this.image);
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";
.sidebar {
  &__avatar {
    background: $dark-accent;
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
    padding: 30px;
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
