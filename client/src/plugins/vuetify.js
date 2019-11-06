import Vue from "vue";
import Vuetify, {
  VForm,
  VTextField,
  VCheckbox,
  VDatePicker,
  VRadioGroup,
  VRadio,
  VSelect,
  VSnackbar,
  VFileInput
} from "vuetify/lib";

Vue.use(Vuetify, {
  components: {
    VForm,
    VTextField,
    VCheckbox,
    VDatePicker,
    VRadioGroup,
    VRadio,
    VSelect,
    VSnackbar,
    VFileInput
  }
});

const opts = {};

export default new Vuetify(opts);
