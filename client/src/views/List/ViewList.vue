<template>
  <panel :title="list.title">
    {{ list }}
  </panel>
</template>

<script>
import ListService from "../../services/ListService";

export default {
  data() {
    return {
      list: {}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      try {
        this.list = (await ListService.getList(this.$route.params.id)).data;
      } catch (e) {
        this.error = e;
      }
    }
  }
};
</script>

<style lang="scss"></style>
