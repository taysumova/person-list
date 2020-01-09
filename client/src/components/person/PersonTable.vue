<template>
  <app-table
    :title="$t('general.persons')"
    :content="persons"
    :status="status"
    empty-text="person.empty"
    content-path="name"
    @add-item="addPerson"
    @open-item="openPerson"
  />
</template>

<script>
import PersonService from "@/services/PersonService";

export default {
  name: "Person",
  data() {
    return {
      persons: [],
      status: "",
      name: ""
    };
  },
  created() {
    this.getPersons();
  },
  methods: {
    async getPersons() {
      try {
        this.status = "loading";
        this.persons = (await PersonService.getPersons()).data;
        this.status = "";
      } catch (err) {
        this.status = { type: "error", message: err };
      }
    },
    async addPerson() {
      await this.$router.push({ name: "create-person" });
    },
    openPerson(id) {
      this.$router.push({ path: `person/${id}` });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/styles/vars";
.person {
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
