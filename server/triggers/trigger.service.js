const TriggerModel = require('./trigger.model');
const EventModel = require('../events/event.model');

module.exports = {
  detect
};

async function detect(params, additionalParams) {
  const { event, visitor } = params;
  const localEvent = await EventModel.findOne({ customId: event });

  if (!localEvent) throw 'Event is not found';

  const isDetected = await TriggerModel.findOne({
    event: localEvent.campaignId,
    visitor
  });

  if (isDetected) {
    return update(isDetected._id, additionalParams);
  }
  
  return create({
    event: localEvent.campaignId,
    visitor
  }, additionalParams);
}

async function create(params, additionalParams) {
  const trigger = new TriggerModel({
    ...params,
    visitorInfo: {
      ...additionalParams
    }
  });
  return await trigger.save();
}

async function update(id, params) {
  const trigger = await TriggerModel.findById(id);

  if (!trigger) throw 'Trigger not found';

  trigger.count += 1;
  trigger.updatedAt = new Date();
  trigger.visitorInfo = params;

  // copy triggerParam properties to trigger
  Object.assign(trigger, params);
  return await trigger.save();
}


// add to script UUID from canvas
// visitor ? visitor : utils.createUUID();
// function createUUID() {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//     let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }