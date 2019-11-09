const express = require('express');
const router = express.Router();
const listService = require('./list.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

// userService.getById(req.user.sub)

function getAll(req, res, next) {
  listService.getAll()
  .then(lists => res.json(lists))
  .catch(err => next(err));
}

function getById(req, res, next) {
  listService.getById(req.params.id)
  .then(list => list ? res.json(list) : res.sendStatus(404))
  .catch(err => next(err));
}

function update(req, res, next) {
  listService.update(req.params.id, req.body)
  .then(() => res.json({}))
  .catch(err => next(err));
}

function _delete(req, res, next) {
  listService.delete(req.params.id)
  .then(() => res.json({}))
  .catch(err => next(err));
}
