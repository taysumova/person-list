<template>
  <app-table
    title="Persons list"
    :content="persons"
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
      } catch (err) {
        this.error = err.message;
      }
    },
    // async addPerson() {
    //   try {
    //     await PersonService.addPerson(this.name);
    //     await this.getPersons();
    //   } catch (err) {
    //     this.error = err.message;
    //   }
    // },
    // async deletePerson(id) {
    //   try {
    //     await PersonService.deletePerson(id);
    //     await this.getPersons();
    //   } catch (err) {
    //     this.error = err.message;
    //   }
    // },
    async addPerson() {
      // try {
      //   await ListService.addList(this.title);
      //   await this.getLists();
      // } catch (err) {
      //   this.error = err.message;
      // }
      console.log("addPerson");
    },
    openPerson(id) {
      console.log(id);
    },
  }
};
</script>

<style scoped lang="scss">
@import "../assets/base";
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
