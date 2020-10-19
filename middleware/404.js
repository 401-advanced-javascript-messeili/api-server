'use strict';

function notFound(req, res, next) {
  res.status(404);
  res.statusMessage = 'Not Found :(';
  res.json({ error: `Message Not Found ${req.requestTime}` });
}

module.exports = notFound;
