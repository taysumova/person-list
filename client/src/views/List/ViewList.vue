<template>
  <preloader v-if="loading" />
  <panel
    v-else
    class="list-view"
    :title="list.title"
    :actions="true"
    :text="deleteText"
    @delete-confirm="deleteList"
  >
    <p class="list-view__description">
      {{ list.description }}
    </p>

    <h4 class="list-view__title">
      {{ $t("general.persons") }}
    </h4>

    <ul class="list-view__persons">
      <li v-for="(person, index) in list.persons" :key="index">
        {{ fullName(person) }}
      </li>
    </ul>

    <modal :status="otherPersons" @close-modal="otherPersons = false">
      <ul class="list-view__persons persons">
        <li
          v-for="(person, index) in newPersons"
          :key="index"
          class="persons__card card"
          @click="bindPersonToList(person._id)"
        >
          <img
            :src="
              person.photo ? person.photo : require(`@/assets/icons/avatar.svg`)
            "
            alt="Person"
            class="card__image"
          />
          <span class="card__text">
            {{ fullName(person) }}
          </span>
        </li>
      </ul>
    </modal>

    <button class="list-view__add-btn" @click="openPersons">
      +&nbsp;{{ $t("general.addListPerson") }}
    </button>
  </panel>
</template>

<script>
import ListService from "../../services/ListService";
import PersonService from "../../services/PersonService";
import Modal from "../../components/general/modal/Modal";

export default {
  components: { Modal },
  data() {
    return {
      list: {},
      loading: false,
      newPersons: {},
      otherPersons: false
    };
  },
  computed: {
    deleteText() {
      return `Are you sure you want to delete the list<br/>&laquo;<b>${this.list.title}</b>&raquo;?`;
    }
  },
  created() {
    this.getList();
  },
  methods: {
    fullName(person) {
      const { surname, name, middleName } = person;
      return `${surname} ${name} ${middleName}`;
    },
    async getList() {
      try {
        this.loading = true;
        this.list = (await ListService.getList(this.$route.params.id)).data;
      } catch (e) {
        this.error = e;
      } finally {
        this.loading = false;
      }
    },
    async openPersons() {
      try {
        let persons = (await PersonService.getPersons()).data;
        this.otherPersons = true;
        this.list.persons.forEach(addedPerson => {
          persons.forEach((person, index) => {
            if (person._id === addedPerson._id) {
              persons.splice(index, 1);
            }
          });
        });
        this.newPersons = persons;
      } catch (e) {
        this.error = e;
      }
    },
    async bindPersonToList(personId) {
      try {
        let { persons } = this.list;
        persons.push(personId);

        await ListService.updateList(this.$route.params.id, {
          persons
        });

        this.$forceUpdate();
      } catch (e) {
        this.error = e;
        console.log(e);
      }
    },
    async deleteList() {
      try {
        await ListService.deleteList(this.$route.params.id);
        await this.$router.go(-1);
      } catch (err) {
        this.error = err;
      }
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/mixins";

.list-view {
  &__title {
    border-bottom: 2px solid #000;
    margin-top: 2rem;
  }
  &__add-btn {
    @include button();
    margin: 1rem 0;
  }
  &__persons {
    margin-top: 0.5rem;
  }
  .persons {
    &__card {
      @include card();
      background: $accent;
      display: flex;
      align-items: center;
      color: $base-color;
      width: 400px;
      margin: 0.4rem auto;
    }
    .card {
      &__image {
        background: $dark-accent;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-right: 1rem;
      }
      &__text {
        font-weight: bold;
        text-align: left;
        text-transform: uppercase;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: calc(100% - 3rem - 40px);
      }
    }
  }
}
</style>
