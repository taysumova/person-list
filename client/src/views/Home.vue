<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Person />
  </div>
</template>

<script>
// @ is an alias to /src
import Person from "@/components/Person.vue";

export default {
  name: "home",
  components: {
    Person
  }
};
</script>
