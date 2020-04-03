const express = require('express');
const router = express.Router();
const eventService = require('./event.service');

// routes
router.get('/', getAll);
router.post('/', create);
router.get('/:id', getTriggers);
router.patch('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
  eventService.getAll()
  .then(events => res.json(events))
  .catch(err => next(err));
}

function create(req, res, next) {
  eventService.create(req.body)
  .then(event => res.send(event))
  .catch(err => next(err));
}

function getTriggers(req, res, next) {
  eventService.getById(req.params.id)
  .then(event => res.json(event))
  .catch(err => next(err));
}

function update(req, res, next) {
  eventService.update(req.params.id, req.body)
  .then((event) => res.json({ event }))
  .catch(err => next(err));
}

function _delete(req, res, next) {
  eventService.delete(req.params.id)
  .then(() => res.json({}))
  .catch(err => next(err));
}
