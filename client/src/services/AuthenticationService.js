import Api from "@/services/Api";
import ApiAuth from "@/services/ApiAuth";

export default {
  register(credentials) {
    return Api().post("users/register", credentials);
  },
  login(credentials) {
    return Api().post("users/login", credentials);
  },
  logout() {
    return ApiAuth().post("users/logout");
  }
};
