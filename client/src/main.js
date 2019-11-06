import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { languages, defaultLocale } from "./locales/index";

import vuetify from "./plugins/vuetify";

Vue.use(VueI18n);

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
