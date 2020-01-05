<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <panel
    class="person-view"
    :title="fullName"
    :actions="true"
    :text="deleteText"
    @delete-confirm="deletePerson"
  >
    <template v-slot:avatar>
      <img :src="person.photo" alt="Photo" width="300" height="300px">
    </template>

    <div class="person-view__contacts contacts">
      <a :href="'mailto:' + person.email" class="contacts__item contacts__email">
        {{ person.email }}
      </a>
      <a :href="'tel:' + person.phone" class="contacts__item contacts__phone">
        {{ person.phone }}
      </a>
      <span class="contacts__item contacts__address">{{ person.address }}</span>
    </div>
    <article class="person-view__additional additional">
      <h4 class="additional__title">{{ $t("additionalInfo") }}</h4>
      <p class="additional__text">{{ person.comments }}</p>
    </article>
  </panel>
</template>

<script>
import PersonService from "../../services/PersonService";

export default {
  data() {
    return {
      person: {},
      error: ""
    };
  },
  created() {
    this.getPerson();
  },
  computed: {
    fullName() {
      const { name, surname, middleName } = this.person;
      return `${surname} ${name} ${middleName}`;
    },
    deleteText() {
      return `Are you sure you want to delete the person<br/><b>${this.fullName}</b>?`;
    }
  },
  methods: {
    async getPerson() {
      try {
        this.person = (await PersonService.getPerson(
          this.$route.params.id
        )).data;
      } catch (err) {
        this.error = err;
      }
    },
    async deletePerson() {
      try {
        await PersonService.deletePerson(this.$route.params.id);
        await this.$router.go(-1);
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/vars";
@import "../../assets/styles/animations";

.person-view {
  &__contacts {
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0 3rem;
  }
  .contacts {
    &__item {
      color: $blue;
      margin: 0.5rem 0;
      transition: all 0.1s ease-in;
      padding-left: 2.5rem;
      &:active,
      &:hover,
      &:active {
        color: $dark-blue;
      }
    }
    &__email {
      background: url("../../assets/icons/mail.svg") no-repeat left;
    }
    &__phone {
      background: url("../../assets/icons/phone.svg") no-repeat left;
    }
    &__address {
      background: url("../../assets/icons/home.svg") no-repeat left;
    }
  }
  &__additional {
    margin: 1rem 0;
  }
  .additional {
    &__title {
      font-size: 1rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    &__text {
      border-left: 2px solid $dark-accent;
      padding-left: 0.5rem;
    }
  }
}
</style>
