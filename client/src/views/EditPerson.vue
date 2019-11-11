<template>
  <person-form
    class="edit-person"
    title="Edit person"
    :person="person"
    @person-action="editPerson"
  >
    <p class="error-text">
      {{ error }}
    </p>
  </person-form>
</template>

<script>
// import PersonService from "../services/PersonService";
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
    async editPerson(personData) {
      try {
        console.log(personData);
        // this.error = "";
        // await PersonService.addPerson({
        //   ...personData
        // });
        await this.$router.go(-1);
      } catch (e) {
        this.error = e.data || "Error during adding person";
      }
    }
  }
};
</script>
