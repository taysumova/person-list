import ApiAuth from "@/services/ApiAuth";

export default {
  getUsers() {
    return ApiAuth().get("users/current");
  },
  getProfile() {
    return ApiAuth().get("profile");
  },
  updateProfile(data) {
    return ApiAuth().patch("profile", data);
  }
};
