<template>
  <panel class="add-list" :title="title">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      class="form form--add-list"
    >
      <v-text-field
        v-model="localList.title"
        :rules="titleRules"
        :label="$t('forms.title')"
        required
      ></v-text-field>

      <v-text-field
        primary
        v-model="localList.description"
        :label="$t('forms.description')"
        required
      ></v-text-field>

      <slot></slot>

      <div class="form__btn-wrapper">
        <button class="btn--cancel" @click.prevent="$router.go(-1)">
          {{ $t("forms.cancel") }}
        </button>
        <button class="btn--submit" @click.prevent="submitList">
          {{ $t("forms.submit") }}
        </button>
      </div>
    </v-form>
  </panel>
</template>

<script>
export default {
  name: "list-form",
  props: ["title", "list"],
  data() {
    return {
      localList: {
        title: "",
        description: ""
      },
      valid: false,
      titleRules: [v => !!v || this.$t("rules.required")]
    };
  },
  created() {
    this.localList = { ...this.list };
  },
  methods: {
    submitList() {
      if (this.$refs.form.validate()) {
        this.$emit("list-action", this.localList);
      }
    }
  }
};
</script>
