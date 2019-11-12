<template>
  <person-form
    class="edit-person"
    :title="$t('general.editPerson')"
    :person="person"
    @person-action="editPerson"
  >
    <p class="error-text">
      {{ error }}
    </p>
  </person-form>
</template>

<script>
import PersonService from "../../services/PersonService";
import PersonForm from "../../components/person/PersonForm";

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
  created() {
    this.getPerson();
  },
  methods: {
    async getPerson() {
      try {
        this.person = (await PersonService.getPerson(
          this.$route.params.id
        )).data;
      } catch (e) {
        this.error = e.data || "Error during getting person info";
      }
    },
    async editPerson(personData) {
      try {
        this.error = "";
        await PersonService.updatePerson(this.$route.params.id, {
          ...personData
        });
        await this.$router.push({ path: "/" });
      } catch (e) {
        this.error = e.data || "Error during adding person";
      }
    }
  }
};
</script>
