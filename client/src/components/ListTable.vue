<template>
  <app-table
    title="List from compo"
    :content="lists"
    content-path="title"
    @add-item="addList"
    @open-item="openList"
  />
</template>

<script>
import ListService from "@/services/ListService";

export default {
  name: "List",
  data() {
    return {
      lists: [],
      error: "",
      title: ""
    };
  },
  created() {
    this.getLists();
  },
  methods: {
    async getLists() {
      try {
        this.lists = (await ListService.getLists()).data;
      } catch (err) {
        this.error = err.message;
      }
    },
    async addList() {
      await this.$router.push({ name: "create-list" });
    },
    openList(id) {
      // TO DO - DELETE ID - AND MAKE JUST VIEW PAGE AND FROM THERE GO TO EDIT
      this.$router.push({ path: `list/${id}/edit` });
    },
    async deleteList(id) {
      try {
        await ListService.deleteList(id);
        await this.getLists();
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>
