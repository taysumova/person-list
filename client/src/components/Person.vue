<template>
  <div class="person">
    <label for="name">Type name</label>
    <input id="name" type="text" v-model="name" />
    <button @click="addPerson">Add person</button>
    <p v-for="(person, index) in persons" :key="index">
      {{ person.name }}
      <button @click="deletePerson(person._id)">
        Delete
      </button>
    </p>
  </div>
</template>

<script>
import PersonService from "@/services/PersonService";
import UserService from "../services/UserService";

export default {
  name: "Person",
  data() {
    return {
      persons: [],
      error: "",
      name: ""
    };
  },
  created() {
    this.getPersons();
  },
  methods: {
    async getPersons() {
      try {
        this.persons = (await PersonService.getPersons()).data;
        await UserService.getUsers();
      } catch (err) {
        this.error = err.message;
      }
    },
    async addPerson() {
      try {
        await PersonService.addPerson(this.name);
        await this.getPersons();
      } catch (err) {
        this.error = err.message;
      }
    },
    async deletePerson(id) {
      try {
        await PersonService.deletePerson(id);
        await this.getPersons();
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style scoped lang="scss">
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
