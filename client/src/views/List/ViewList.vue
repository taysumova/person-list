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

    <ul>
      <li
        v-for="(person, index) in list.persons"
        :key="index"
      >
        {{ person.name }}
      </li>
    </ul>

    <modal :status="otherPersons" @close-modal="otherPersons = false">
      <ul>
        <li
          v-for="(person, index) in newPersons"
          :key="index"
          @click="bindPersonToList(person._id)"
        >
          {{ person.name }}
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
      return `Are you sure you want to delete the list<br/><b>${this.list.title}</b>?`;
    }
  },
  created() {
    this.getList();
  },
  methods: {
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
@import "../../assets/styles/vars";

.list-view {
  &__title {
    border-bottom: 2px solid #000;
    margin-top: 2rem;
  }
  &__add-btn {
    margin: 1rem 0;
  }
}
</style>
