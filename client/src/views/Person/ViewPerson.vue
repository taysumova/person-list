<template>
  <panel class="person-view" :title="fullName" :actions="true">
    <!--    slot in panel for avatar -->
    {{ person }}
  </panel>
</template>

<script>
import PersonService from "../../services/PersonService";

export default {
  data() {
    return {
      person: ""
    };
  },
  created() {
    this.getPerson();
  },
  computed: {
    fullName() {
      const { name, surname, middleName } = this.person;
      return `${surname} ${name} ${middleName}`;
    }
  },
  methods: {
    async getPerson() {
      try {
        this.person = (await PersonService.getPerson(
          this.$route.params.id
        )).data;
      } catch (e) {
        this.error = e;
      }
    }
  }
};
</script>

<style lang="scss">
.person-view {
}
</style>
