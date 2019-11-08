<template>
  <footer class="app__footer">
    Made by Luiza Taysumova ©&nbsp;2019
  </footer>
</template>

<script>
export default {
  name: "app-footer"
};
</script>

<style lang="scss">
.app__footer {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  color: #000;
  text-align: center;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
}
</style>
