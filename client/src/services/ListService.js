import ApiAuth from "@/services/ApiAuth";

const path = "lists/";

export default {
  getLists() {
    return ApiAuth().get(path);
  },
  getList(listId) {
    return ApiAuth().get(path + listId);
  },
  addList(listParams) {
    return ApiAuth().post(path, listParams);
  },
  updateList(id, data) {
    return ApiAuth().patch(path + id, data);
  },
  deleteList(id) {
    return ApiAuth().delete(path + id);
  }
};
