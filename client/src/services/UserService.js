import ApiAuth from "@/services/ApiAuth";

export default {
  getProfile() {
    return ApiAuth().get("profile");
  },
  updateProfile(data) {
    return ApiAuth().patch("profile", data);
  }
};
