<template>
  <list-form
    class="edit-list"
    :title="$t('general.editList')"
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
import ListForm from "../../components/list/ListForm";

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
        this.error = e;
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
        this.error = e;
      }
    }
  }
};
</script>
