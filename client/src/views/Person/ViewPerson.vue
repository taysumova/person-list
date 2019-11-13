<template>
  <panel
    class="person-view"
    :title="fullName"
    :actions="true"
    :text="deleteText"
    @delete-confirm="deletePerson"
  >
    <!--    slot in panel for avatar -->
    {{ person }}
  </panel>
</template>

<script>
import PersonService from "../../services/PersonService";

export default {
  data() {
    return {
      person: "",
      error: ""
    };
  },
  created() {
    this.getPerson();
  },
  computed: {
    fullName() {
      const { name, surname, middleName } = this.person;
      return `${surname} ${name} ${middleName}`;
    },
    deleteText() {
      return `Are you sure you want to delete the person<br/><b>${this.fullName}</b>?`;
    }
  },
  methods: {
    async getPerson() {
      try {
        this.person = (await PersonService.getPerson(
          this.$route.params.id
        )).data;
      } catch (err) {
        this.error = err;
      }
    },
    async deletePerson() {
      try {
        await PersonService.deletePerson(this.$route.params.id);
        await this.$router.go(-1);
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<style lang="scss">
.person-view {
}
</style>
