const PersonModel = require('./person.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll(userId) {
  return await PersonModel.find().where({author: userId});
}

async function getById(id) {
  return await PersonModel.findById(id);
}

async function create(userId, params) {
  const person = new PersonModel(params);
  person.author = userId;
  return await person.save();
}

async function update(id, params) {
  const person = await PersonModel.findById(id);

  // validate
  if (!person) throw 'Person not found';

  // copy PersonParam properties to person
  Object.assign(person, params);

  await person.save();
}

async function _delete(id) {
  await PersonModel.findByIdAndRemove(id);
}
