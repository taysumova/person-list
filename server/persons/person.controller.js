const cloudinary = require('cloudinary').v2;
const express = require('express');
const router = express.Router();
const personService = require('./person.service');

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

// routes
router.post('/', create);
router.post('/image', image);
router.get('/', getAll);
router.get('/:id', getById);
router.patch('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
  personService.create(req.user.sub, req.body)
  .then(person => res.send(person))
  .catch(err => next(err));
}

function getAll(req, res, next) {
  personService.getAll(req.user.sub)
  .then(persons => res.json(persons))
  .catch(err => next(err));
}

function getById(req, res, next) {
  personService.getById(req.params.id)
  .then(person => person ? res.json(person) : res.sendStatus(404))
  .catch(err => next(err));
}

function image(req, res, next) {
  const { photo } = req.body;
  cloudinary.uploader.upload(photo, function(error, result) {
    if(result) {
      res.json({ image_url: result.url });
    }
    if(error) {
      next(error);
    }
  });
}

function update(req, res, next) {
  personService.update(req.params.id, req.body)
  .then(() => res.json({}))
  .catch(err => next(err));
}

function _delete(req, res, next) {
  personService.delete(req.params.id)
  .then(() => res.json({ status: "done" }))
  .catch(err => next(err));
}
