import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit("SET_TOKEN", token);
    },
    logout({ commit }) {
      commit("SET_TOKEN", null);
    }
  },
  modules: {}
});
