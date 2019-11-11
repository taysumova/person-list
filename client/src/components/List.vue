<template>
  <div class="list card">
    <v-text-field
    v-model="title"
    label="List title"
    required
    ></v-text-field>
    <button class="form__btn" @click="addList">Add list</button>
    <p v-for="(list, index) in lists" :key="index">
      {{ list.title }}
      <button @click="deleteList(list._id)">
        Delete
      </button>
    </p>
  </div>
</template>

<script>
import ListService from "@/services/ListService";

export default {
  name: "List",
  data() {
    return {
      lists: [],
      error: "",
      title: ""
    };
  },
  created() {
    this.getLists();
  },
  methods: {
    async getLists() {
      try {
        this.lists = (await ListService.getLists()).data;
      } catch (err) {
        this.error = err.message;
      }
    },
    async addList() {
      try {
        await ListService.addList(this.title);
        await this.getLists();
      } catch (err) {
        this.error = err.message;
      }
    },
    async deleteList(id) {
      try {
        await ListService.deleteList(id);
        await this.getLists();
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
