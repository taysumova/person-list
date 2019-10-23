import axios from "axios";

const url = "api/persons/";

class PersonService {
  // Get Persons
  static getPersons() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
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
    return axios.post(url, {
      name
    });
  }
  // Delete Person
  static deletePerson(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PersonService;
