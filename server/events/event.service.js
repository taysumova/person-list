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
  const event = await EventModel.findOne({ campaignId: eventId });

  if (!event) throw 'Event is not found';

  const triggers = await TriggerModel.find({ event: event._id });
  return {
    data: event,
    triggers 
  };
}

async function create(params) {
  const event = new EventModel(params);
  return await event.save();
}

async function update(id, params) {
  const event = await EventModel.findOne({ campaignId: id });

  // validate
  if (!event) throw 'Event is not found';

  // copy params properties to event
  Object.assign(event, params);

  return await event.save();
}

async function _delete(eventId) {
  const event = await EventModel.findOne({ campaignId: eventId });
  await EventModel.findByIdAndRemove(event._id);
}
