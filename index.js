'use strict';
const mongoose = require('mongoose');
const server = require('./lib/server.js');
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.start();
  })
  .catch((err) => console.log(err.message));
