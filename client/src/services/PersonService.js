import ApiAuth from "@/services/ApiAuth";

export default {
  getPersons() {
    return ApiAuth().get("persons");
  },
  getPerson(personId) {
    return ApiAuth().get(`persons/${personId}`);
  },
  addPerson(personParams) {
    return ApiAuth().post("persons", personParams);
  },
  updatePerson(data) {
    return ApiAuth().patch("persons", data);
  },
  deletePerson(id) {
    return ApiAuth().delete(`persons/${id}`);
  }
};
