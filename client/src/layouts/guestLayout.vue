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
@import "../assets/base.scss";

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
  padding: 0 40px;
  position: relative;
  height: 100%;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  @media screen and (max-width: 456px) {
    padding: 0 10px;
  }
  @media screen and (max-width: 321px) {
    padding: 0;
  }
  @media screen and (max-height: 618px) {
    padding: 60px 10px 0;
  }
  @media screen and (max-height: 933px) and (max-width: 456px) {
    padding: 80px 10px;
  }
  @media screen and (max-height: 933px) and (max-width: 321px) {
    padding: 80px 0;
  }
}
</style>
