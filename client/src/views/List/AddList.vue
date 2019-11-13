<template>
  <list-form
    class="add-list"
    :title="$t('general.addList')"
    list="list"
    @list-action="addList"
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
  methods: {
    async addList(listData) {
      try {
        this.error = "";
        await ListService.addList({
          ...listData
        });
        await this.$router.go(-1);
      } catch (e) {
        this.error = e;
      }
    }
  }
};
</script>

<style lang="scss"></style>
