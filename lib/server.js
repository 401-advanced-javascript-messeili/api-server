'use strict';
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const timestamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const notFound = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');
const apiRouter = require('../routes/api.js');
require('dotenv').config();

app.use(morgan('dev'));
app.use(cors());

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(timestamp);
app.use(logger);
app.use('/api/v1', apiRouter);

app.get('/bad', (req, res) => {
  throw new Error('a test error');
});

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: () => {
    app.listen(PORT, () => {
      console.log(`Listening to PORT ${PORT}`);
    });
  },
};
