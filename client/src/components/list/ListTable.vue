<template>
  <app-table
    :title="$t('general.lists')"
    :content="lists"
    :status="status"
    empty-text="list.empty"
    :content-path="['title']"
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
      this.$router.push({ path: `list/${id}` });
    }
  }
};
</script>
