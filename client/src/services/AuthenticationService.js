import Api from "@/services/Api";
import ApiAuth from "@/services/ApiAuth";

export default {
  register(credentials) {
    return Api().post("users/register", credentials);
  },
  login(credentials) {
    return Api().post("users/authenticate", credentials);
  },
  logout() {
    return ApiAuth().post("users/logout");
  }
};
