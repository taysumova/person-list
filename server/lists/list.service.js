const ListModel = require('./list.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await ListModel.find();
}

async function getById(id) {
  return await ListModel.findById(id);
}

async function create(params) {
  const list = new List(params);
  await list.save();
}

async function update(id, params) {
  const list = await ListModel.findById(id);

  // validate
  if (!list) throw 'List not found';

  // copy ListParam properties to list
  Object.assign(list, params);

  await list.save();
}

async function _delete(id) {
  await ListModel.findByIdAndRemove(id);
}
