<template>
  <div class="home">
    <Person />
    <List />
  </div>
</template>

<script>
import Person from "@/components/person/PersonTable.vue";
import List from "@/components/list/ListTable";

export default {
  name: "home",
  data() {
    return {
      mode: "register-form"
    };
  },
  components: {
    List,
    Person
  }
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
  justify-content: space-evenly;
}
</style>
