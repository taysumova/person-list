<template>
  <panel
    class="list-view"
    :title="list.title"
    :actions="true"
    :text="deleteText"
    @delete-confirm="deleteList"
  >
    <p class="list-view__description">
      {{ list.description }}
    </p>
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
  computed: {
    deleteText() {
      return `Are you sure you want to delete the list<br/><b>${this.list.title}</b>?`;
    }
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
    },
    async deleteList() {
      try {
        await ListService.deleteList(this.$route.params.id);
        await this.$router.go(-1);
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<style lang="scss"></style>
