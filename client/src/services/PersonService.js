import ApiAuth from "@/services/ApiAuth";

const path = "persons/";

export default {
  getPersons() {
    return ApiAuth().get(path);
  },
  getPerson(id) {
    return ApiAuth().get(path + id);
  },
  addPerson(personParams) {
    return ApiAuth().post(path, personParams);
  },
  uploadImage(data) {
    return ApiAuth().post(path + "image", data);
  },
  updatePerson(id, data) {
    return ApiAuth().patch(path + id, data);
  },
  deletePerson(id) {
    return ApiAuth().delete(path + id);
  }
};
