<template>
  <panel class="add-list" :title="title">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form form--add-person"
    >
      <v-text-field
        v-model="localPerson.name"
        :rules="nameRules"
        :label="$t('forms.name')"
        required
      ></v-text-field>

      <v-textarea
        v-model="localPerson.comment"
        :label="$t('forms.comment')"
      ></v-textarea>

      <slot></slot>

      <div class="form__btn-wrapper">
        <button class="btn--cancel" @click.prevent="$router.go(-1)">
          {{ $t("forms.cancel") }}
        </button>
        <button class="btn--submit" @click.prevent="submitPerson">
          {{ $t("forms.submit") }}
        </button>
      </div>
    </v-form>
  </panel>
</template>

<script>
export default {
  name: "person-form",
  props: ["title", "person"],
  data() {
    return {
      localPerson: {
        name: "",
        listId: "",
        comment: ""
      },
      valid: false,
      nameRules: [v => !!v || this.$t("rules.required")]
      // Фамилия*
      // Имя*
      // Отчество
      // Email*
      // Номер телефона*
      // Адрес*
      // Дополнительная информация
      // Статус заявки
    };
  },
  created() {
    this.localPerson = { ...this.person };
  },
  methods: {
    submitPerson() {
      if (this.$refs.form.validate()) {
        this.$emit("person-action", this.localPerson);
      }
    }
  }
};
</script>

<style lang="scss"></style>
