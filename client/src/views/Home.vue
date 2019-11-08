<template>
  <div class="home">
    <Person />
  </div>
</template>

<script>
import Person from "@/components/Person.vue";

export default {
  name: "home",
  data() {
    return {
      mode: "register-form"
    };
  },
  components: {
    Person
  }
};
</script>
