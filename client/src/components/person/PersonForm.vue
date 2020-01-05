<template>
  <panel class="add-list" :title="title">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form form--add-person"
    >
      <image-upload @image-load="setImage" />

      <v-text-field
        v-model="localPerson.surname"
        :label="$t('forms.surname')"
      ></v-text-field>

      <v-text-field
        v-model="localPerson.name"
        :rules="nameRules"
        :label="$t('forms.name')"
        required
      ></v-text-field>

      <v-text-field
        v-model="localPerson.middleName"
        :label="$t('forms.middleName')"
      ></v-text-field>

      <v-text-field
        v-model="localPerson.email"
        :rules="emailRules"
        label="Email"
      ></v-text-field>

      <v-text-field
        v-model="localPerson.phone"
        maxlength="12"
        :label="$t('forms.phone')"
      ></v-text-field>

      <v-text-field
        v-model="localPerson.address"
        :label="$t('forms.address')"
      ></v-text-field>

      <v-textarea
        v-model="localPerson.comments"
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
import { personRules } from "../../helpers/rules";
import ImageUpload from "../general/ImageUpload";

export default {
  name: "person-form",
  components: { ImageUpload },
  props: ["title", "person"],
  data() {
    return {
      localPerson: {
        surname: "",
        name: "",
        middleName: "",
        photo: "",
        email: "",
        phone: "",
        address: "",
        comments: "",
        listId: ""
      },
      valid: false,
      nameRules: [v => !!v || this.$t("rules.required")],
      emailRules: personRules.email
    };
  },
  watch: {
    person(data) {
      this.localPerson = { ...data };
    }
  },
  methods: {
    submitPerson() {
      if (this.$refs.form.validate()) {
        this.$emit("person-action", this.localPerson);
      }
    },
    setImage(image) {
      this.localPerson.photo = image;
    }
  }
};
</script>

<style lang="scss"></style>
