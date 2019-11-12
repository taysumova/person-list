<template>
  <app-table
    title="Lists"
    :content="lists"
    :status="status"
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
      status: "",
      title: ""
    };
  },
  created() {
    this.getLists();
  },
  methods: {
    async getLists() {
      try {
        this.status = "loading";
        this.lists = (await ListService.getLists()).data;
        this.status = "";
      } catch (err) {
        this.status = { type: "error", message: err };
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
