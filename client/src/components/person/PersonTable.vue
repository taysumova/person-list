<template>
  <app-table
    :title="$t('general.persons')"
    :content="persons"
    :status="status"
    content-path="name"
    @add-item="addPerson"
    @open-item="openPerson"
  />
  <!--  <div class="person card">-->
  <!--    <v-text-field v-model="name" label="Person name" required></v-text-field>-->
  <!--    <button class="form__btn" @click="addPerson">Add person</button>-->
  <!--    <p v-for="(person, index) in persons" :key="index">-->
  <!--      {{ person.name }}-->
  <!--      <button @click="deletePerson(person._id)">-->
  <!--        Delete-->
  <!--      </button>-->
  <!--    </p>-->
  <!--  </div>-->
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
      this.$router.push({ path: `person/${id}/edit` });
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
