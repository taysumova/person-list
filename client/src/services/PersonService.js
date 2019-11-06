import ApiAuth from "@/services/ApiAuth";

const url = "persons/";

class PersonService {
  // Get Persons
  static getPersons() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await ApiAuth.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  // Add Person
  static addPerson(name) {
    return ApiAuth.post(url, {
      name
    });
  }
  // Delete Person
  static deletePerson(id) {
    return ApiAuth.delete(`${url}${id}`);
  }
}

export default PersonService;
