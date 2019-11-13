<template>
  <person-form
    class="add-person"
    :title="$t('general.addPerson')"
    :person="person"
    @person-action="addPerson"
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
  methods: {
    async addPerson(personData) {
      try {
        this.error = "";
        await PersonService.addPerson({
          ...personData
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
