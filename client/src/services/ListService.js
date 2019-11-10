import ApiAuth from "@/services/ApiAuth";

export default {
  getLists() {
    return ApiAuth().get("lists");
  },
  addList(name) {
    return ApiAuth().post("lists", {
      name
    });
  },
  updateList(data) {
    return ApiAuth().patch("lists", data);
  },
  deleteList(id) {
    return ApiAuth().delete(`lists/${id}`);
  }
};
