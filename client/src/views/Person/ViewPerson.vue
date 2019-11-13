<template>
  <panel :title="person.name">
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
.person-info {
}
</style>
