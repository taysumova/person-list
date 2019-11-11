<template>
  <panel class="add-list" title="Add person">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form form--add-person"
    >
      <v-text-field
        v-model="name"
        :rules="nameRules"
        :label="$t('forms.name')"
        required
      ></v-text-field>

      <v-textarea v-model="comment" :label="$t('forms.comment')"></v-textarea>

      <p class="error-text">
        {{ error }}
      </p>

      <div class="form__btn-wrapper">
        <button class="btn--cancel" @click.prevent="$router.go(-1)">
          {{ $t("forms.cancel") }}
        </button>
        <button class="btn--submit" @click.prevent="addPerson">
          {{ $t("forms.submit") }}
        </button>
      </div>
    </v-form>
  </panel>
</template>

<script>
import PersonService from "../services/PersonService";

export default {
  data() {
    return {
      name: "",
      listId: "",
      comment: "",
      error: "",
      valid: false,
      nameRules: [v => !!v || this.$t("rules.required")]
    };
  },
  methods: {
    async addPerson() {
      try {
        this.error = "";
        if (this.$refs.form.validate()) {
          await PersonService.addPerson({
            name: this.name,
            listId: this.listId,
            comment: this.comment
          });
          await this.$router.go(-1);
        }
      } catch (e) {
        this.error = e.data || "Error during adding person";
      }
    }
  }
};
</script>

<style lang="scss"></style>
