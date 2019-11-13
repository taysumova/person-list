<template>
  <div class="guest">
    <guest-header />
    <slot> </slot>
    <guest-footer />
  </div>
</template>

<script>
import GuestHeader from "@/components/header/GuestHeader.vue";
import GuestFooter from "@/components/footer/GuestFooter.vue";

export default {
  name: "guest",
  components: {
    GuestFooter,
    GuestHeader
  }
};
</script>

<style lang="scss">
@import "../assets/styles/vars";

.guest {
  background-color: $bg-color;
  background-image: linear-gradient(
      90deg,
      $bg-color 0%,
      $bg-color 50%,
      rgba(50, 170, 235, 0.4) 100%
    ),
    url("../assets/img/bg.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 0 60px;
  position: relative;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 320px;
}
</style>
