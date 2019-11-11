import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { languages, defaultLocale } from "./locales/index";

import vuetify from "./plugins/vuetify";

// layouts
import DefaultLayout from "./layouts/baseLayout.vue";
import GuestLayout from "./layouts/guestLayout.vue";
import AppLayout from "./layouts/appLayout.vue";

// global components
import Table from "./components/general/Table.vue";
import SelectInput from "./components/general/SelectInput.vue";

Vue.use(VueI18n);

Vue.component("default-layout", DefaultLayout);
Vue.component("guest-layout", GuestLayout);
Vue.component("app-layout", AppLayout);

Vue.component("app-table", Table);
Vue.component("select-input", SelectInput);

Vue.config.productionTip = false;

const messages = Object.assign(languages);
const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: "ru",
  silentTranslationWarn: true,
  messages
});

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
