<template>
  <person-form
    class="add-person"
    :title="$t('general.addPerson')"
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
      error: ""
    };
  },
  methods: {
    async addPerson(personData) {
      try {
        this.error = "";
        const { photo } = personData;
        const imageRes = photo
          ? await PersonService.uploadImage({
              photo
            })
          : "";
        await PersonService.addPerson({
          ...personData,
          photo: imageRes ? imageRes.data.image_url : ""
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
