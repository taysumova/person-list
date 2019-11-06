import Api from "@/services/Api";
import ApiAuth from "@/services/ApiAuth";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  },
  login(credentials) {
    return Api().post("login", credentials);
  },
  logout() {
    return ApiAuth().post("logout");
  }
};
