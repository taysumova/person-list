<template>
  <panel class="add-list" title="Add list">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form form--add-list"
    >
      <v-text-field
        v-model="title"
        :rules="titleRules"
        :label="$t('forms.title')"
        required
      ></v-text-field>

      <v-text-field
        primary
        v-model="description"
        :label="$t('forms.description')"
        required
      ></v-text-field>

      <p class="error-text">
        {{ error }}
      </p>

      <div class="form__btn-wrapper">
        <button class="btn--cancel" @click.prevent="$router.go(-1)">
          {{ $t("forms.cancel") }}
        </button>
        <button class="btn--submit" @click.prevent="addList">
          {{ $t("forms.submit") }}
        </button>
      </div>
    </v-form>
  </panel>
</template>

<script>
import ListService from "@/services/ListService";

export default {
  data() {
    return {
      title: "",
      description: "",
      error: "",
      valid: false,
      titleRules: [v => !!v || this.$t("rules.required")]
    };
  },
  methods: {
    async addList() {
      try {
        this.error = "";
        if (this.$refs.form.validate()) {
          await ListService.addList({
            title: this.title,
            description: this.description
          });
          await this.$router.push({ path: "/" });
        }
      } catch (e) {
        this.error = e.data || "Error during adding list";
      }
    }
  }
};
</script>

<style lang="scss"></style>
