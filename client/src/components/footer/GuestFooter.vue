<template>
  <footer class="guest__footer">
    <div class="footer__contacts">
      <a
        href="https://www.linkedin.cn/in/луиза-тайсумова-76b5a5100/"
        target="_blank"
      >
        <img
          width="26"
          height="26"
          src="@/assets/icons/linkedin.svg"
          alt="inLink"
          class="linkedin-icon"
        />
      </a>
      <a href="https://vk.com/id163135870" target="_blank">
        <img
          class="vk-icon"
          width="26"
          height="30"
          src="@/assets/icons/vk.svg"
          alt="vkLink"
        />
      </a>
    </div>
    <p class="footer__copyright">
      Made by Luiza Taysumova ©&nbsp;2019
    </p>
  </footer>
</template>

<script>
export default {
  name: "guest-footer"
};
</script>

<style lang="scss">
.guest__footer {
  color: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 1rem;
  .footer {
    &__contacts {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;
      a {
        width: 26px;
        height: 26px;
        margin: 3px;
        &:hover,
        &:active {
          opacity: 0.7;
        }
      }
      img {
        width: 26px;
        height: 26px;
      }
      .linkedin-icon {
        padding-bottom: 4px;
      }
      .vk-icon {
        margin-right: -3px;
        height: 30px;
      }
    }
    &__copyright {
      padding-bottom: 1rem;
    }
  }
}
</style>
