<template>
  <list-form
    class="edit-list"
    title="Edit list"
    :list="list"
    @list-action="editList"
  >
    <p class="error-text">
      {{ error }}
    </p>
  </list-form>
</template>

<script>
import ListService from "@/services/ListService";
import ListForm from "../components/ListForm";

export default {
  components: { ListForm },
  data() {
    return {
      list: {
        title: "",
        description: ""
      },
      error: ""
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
        this.error = e.data || "Error during getting list info";
      }
    },
    async editList(listData) {
      try {
        this.error = "";
        await ListService.updateList(this.$route.params.id, {
          ...listData
        });
        await this.$router.push({ path: "/" });
      } catch (e) {
        this.error = e.data || "Error during adding list";
      }
    }
  }
};
</script>
