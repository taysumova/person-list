const ListModel = require('./list.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll(userId) {
  return await ListModel.find().where({author: userId});
}

async function getById(id) {
  return await ListModel.findById(id).populate('persons name');
}

async function create(userId, params) {
  const list = new ListModel(params);
  list.author = userId;
  return await list.save();
}

async function update(id, params) {
  const list = await ListModel.findById(id);

  // validate
  if (!list) throw 'List not found';

  // copy ListParam properties to list
  Object.assign(list, params);

  return await list.save();
}

async function _delete(id) {
  await ListModel.findByIdAndRemove(id);
}
