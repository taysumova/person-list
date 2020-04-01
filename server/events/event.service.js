const EventModel = require('./event.model');
const TriggerModel = require('../triggers/trigger.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await EventModel.find();
}

async function getById(eventId) {
  const event = await EventModel.find({ customId: eventId });
  event.triggers = await TriggerModel.find({ event: event._id });
  return event;
}

async function create(params) {
  const event = new EventModel(params);
  return await event.save();
}

async function update(id, params) {
  const event = await EventModel.find().where({ customId: id });

  // validate
  if (!event) throw 'Event is not found';

  // copy params properties to event
  Object.assign(event, params);

  return await event.save();
}

async function _delete(eventId) {
  const event = await EventModel.find().where({ customId: eventId });
  await EventModel.findByIdAndRemove(event._id);
}
