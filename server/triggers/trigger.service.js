const TriggerModel = require('./trigger.model');
const EventModel = require('../events/event.model');

module.exports = {
  create,
  update
};

async function create(eventId, params) {
  const trigger = new TriggerModel(params);
  trigger.event = await (EventModel.find({ customId: eventId }))._id;
  return await trigger.save();
}

async function update(id, params) {
  const trigger = await TriggerModel.findById(id);

  // validate
  if (!trigger) throw 'Trigger not found';

  // copy triggerParam properties to trigger
  Object.assign(trigger, params);

  return await trigger.save();
}
