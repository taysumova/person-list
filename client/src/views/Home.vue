<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" height="60" />
    <!--    <img alt="Vue logo" src="../assets/favicon.svg" height="40" />-->
    <!--    <img alt="Vue logo" src="../assets/logo-short.svg" height="60" />-->
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
