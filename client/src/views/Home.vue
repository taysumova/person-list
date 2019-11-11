<template>
  <div class="home">
    <List />
    <Person />
  </div>
</template>

<script>
import Person from "@/components/Person.vue";
import List from "../components/List";

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
  justify-content: space-between;
}
</style>
