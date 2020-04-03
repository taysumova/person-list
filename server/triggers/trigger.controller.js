const express = require('express');
const router = express.Router();
const triggerService = require('./trigger.service');

// routes
router.post('/', detect);

module.exports = router;

function detect(req, res, next) {
  triggerService.detect(req.query, req.body)
  .then(event => res.send(event))
  .catch(err => next(err));
}
