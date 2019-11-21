<template>
  <panel
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
      <li></li>
    </ul>

    <modal :status="otherPersons" @close-modal="otherPersons = false">
      Modal
    </modal>
    <button class="list-view__add-btn" @click="openPersons">
      +&nbsp;{{ $t("general.addPerson") }}
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
        this.list = (await ListService.getList(this.$route.params.id)).data;
      } catch (e) {
        this.error = e;
      }
    },
    async openPersons() {
      try {
        this.otherPersons = true;
        this.newPersons = (await PersonService.getPersons()).data;
      } catch (e) {
        this.error = e;
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
