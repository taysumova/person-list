import ApiAuth from "@/services/ApiAuth";

export default {
  getLists() {
    return ApiAuth().get("lists");
  },
  getList(listId) {
    return ApiAuth().get(`lists/${listId}`);
  },
  addList(listParams) {
    return ApiAuth().post("lists", listParams);
  },
  updateList(data) {
    return ApiAuth().patch("lists", data);
  },
  deleteList(id) {
    return ApiAuth().delete(`lists/${id}`);
  }
};
