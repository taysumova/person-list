import ApiAuth from "@/services/ApiAuth";

export default {
  getProfile() {
    return ApiAuth().get("users/current");
  }
  // updateProfile(data) {
  //   return ApiAuth().patch("profile", data);
  // }
};
