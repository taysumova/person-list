import ApiAuth from "@/services/ApiAuth";

export default {
  getPersons() {
    return ApiAuth().get("persons");
  },
  getPerson(personId) {
    return ApiAuth().get(`persons/${personId}`);
  },
  addPerson(name) {
    return ApiAuth().post("persons", {
      name
    });
  },
  updatePerson(data) {
    return ApiAuth().patch("persons", data);
  },
  deletePerson(id) {
    return ApiAuth().delete(`persons/${id}`);
  }
};

// class PersonService {
//   // Get Persons
//   static getPersons() {
//     return new Promise(async (resolve, reject) => {
//       try {
//         console.log("I am here");
//         const res = await ApiAuth.get("persons");
//         const data = res.data;
//         resolve(
//           data.map(post => ({
//             ...post,
//             createdAt: new Date(post.createdAt)
//           }))
//         );
//       } catch (err) {
//         reject(err);
//       }
//     });
//   }
//   // Add Person
//   static addPerson(name) {
//     return ApiAuth.post("persons", {
//       name
//     });
//   }
//   // Delete Person
//   static deletePerson(id) {
//     return ApiAuth.delete(`persons/${id}`);
//   }
// }
//
// export default PersonService;
