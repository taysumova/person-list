<template>
  <list-form
    class="edit-list"
    title="Edit list"
    list="list"
    @list-action="editList"
  >
    <p class="error-text">
      {{ error }}
    </p>
  </list-form>
</template>

<script>
// import ListService from "@/services/ListService";
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
  methods: {
    async editList(listData) {
      try {
        this.error = "";
        console.log(listData);
        // await ListService.addList({
        //   ...listData
        // });
        // await this.$router.push({ path: "/" });
      } catch (e) {
        this.error = e.data || "Error during adding list";
      }
    }
  }
};
</script>
