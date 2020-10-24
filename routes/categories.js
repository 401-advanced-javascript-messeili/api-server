'use strict';

const express = require('express');

const categoriesRouter = express.Router();
const categoriesModel = require('../lib/models/categories/categories.model.js');

//Categories routes
categoriesRouter.post('/categories', (req, res) => {
  categoriesModel.create(req.body).then((data) => {
    res.status(201).json(data);
  });
});
categoriesRouter.get('/categories', (req, res) => {
  categoriesModel.get().then((data) => {
    const count = data.length;
    res.status(200).json({ count, data });
  });
});
categoriesRouter.get('/categories/:id', (req, res) => {
  let id = req.params.id;
  categoriesModel.get(id).then((data) => {
    res.status(200).json(data[0]);
  });
});
categoriesRouter.put('/categories/:id', (req, res) => {
  let id = req.params.id;
  categoriesModel.update(id, req.body).then(() => {
    categoriesModel.get(id).then((data) => {
      res.status(200).json(data[0]);
    });
  });
});

categoriesRouter.patch('/categories/:id', (req, res) => {
  let id = req.params.id;
  categoriesModel.update(id, req.body).then(() => {
    categoriesModel.get(id).then((data) => {
      res.status(200).json(data[0]);
    });
  });
});
categoriesRouter.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  categoriesModel.delete(id).then(() => {
    categoriesModel.get().then((data) => {
      const count = data.length;
      res.status(200).json({ count, data });
    });
  });
});

module.exports = categoriesRouter;
