<template>
  <preloader v-if="loading" />
  <panel
    v-else
    class="person-view"
    :title="fullName"
    :actions="true"
    :text="deleteText"
    @delete-confirm="deletePerson"
  >
    <div class="person-view__main">
      <img
        v-if="person.photo"
        :src="person.photo"
        class="person-view__photo"
        alt="Photo"
        width="150"
        height="150px"
      />
      <div class="person-view__contacts contacts">
        <a
          :href="'mailto:' + person.email"
          class="contacts__item contacts__email"
        >
          {{ person.email }}
        </a>
        <a :href="'tel:' + person.phone" class="contacts__item contacts__phone">
          {{ person.phone }}
        </a>
        <span class="contacts__item contacts__address">{{
          person.address
        }}</span>
      </div>
    </div>
    <article
      v-if="!loading && person.comments"
      class="person-view__additional additional"
    >
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
      error: "",
      loading: false
    };
  },
  created() {
    this.getPerson();
  },
  computed: {
    fullName() {
      let { name = "", surname = "", middleName = "" } = this.person;
      return `${surname} ${name} ${middleName}`;
    },
    deleteText() {
      return `Are you sure you want to delete the person<br/><b>${this.fullName}</b>?`;
    }
  },
  methods: {
    async getPerson() {
      try {
        this.loading = true;
        this.person = (await PersonService.getPerson(
          this.$route.params.id
        )).data;
      } catch (err) {
        this.error = err;
      } finally {
        this.loading = false;
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
  .panel__header {
    text-align: center;
    &:after {
      left: 41%;
    }
  }
  &__main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__photo {
    border-radius: 50%;
    margin-right: 20px;
    object-fit: cover;
    width: 150px;
    height: 150px;
  }
  &__contacts {
    display: flex;
    flex-direction: column;
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
    text-align: center;
    &__title {
      font-size: 1rem;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }
    &__text {
      color: $textGray;
    }
  }
}
</style>
