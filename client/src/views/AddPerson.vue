<template>
  <person-form
    class="add-list"
    title="Add person"
    :person="person"
    @person-action="addPerson"
  >
    <p class="error-text">
      {{ error }}
    </p>
  </person-form>
</template>

<script>
import PersonService from "../services/PersonService";
import PersonForm from "../components/PersonForm";

export default {
  components: { PersonForm },
  data() {
    return {
      person: {
        name: "",
        listId: "",
        comment: ""
      },
      error: ""
    };
  },
  methods: {
    async addPerson(personData) {
      try {
        this.error = "";
        await PersonService.addPerson({
          ...personData
        });
        await this.$router.go(-1);
      } catch (e) {
        this.error = e.data || "Error during adding person";
      }
    }
  }
};
</script>

<style lang="scss"></style>
