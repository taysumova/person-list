const express = require('express');
const router = express.Router();
const triggerService = require('./trigger.service');

// routes
router.post('/', create);
router.patch('/:id', update);

module.exports = router;

function create(req, res, next) {
  triggerService.create(req.body)
  .then(event => res.send(event))
  .catch(err => next(err));
}

function update(req, res, next) {
  triggerService.update(req.params.id, req.body)
  .then((event) => res.json({event}))
  .catch(err => next(err));
}
