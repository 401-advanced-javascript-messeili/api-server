'use strict';

const express = require('express');

const productsRouter = express.Router();
const productsModel = require('../lib/models/products/products.model.js');

//products Routes
productsRouter.post('/products', (req, res) => {
  productsModel.create(req.body).then((data) => {
    res.status(201).json(data);
  });
});
productsRouter.get('/products', (req, res) => {
  productsModel.get().then((data) => {
    const count = data.length;
    res.status(200).json({ count, data });
  });
});
productsRouter.get('/products/:id', (req, res) => {
  let id = req.params.id;
  productsModel.get(id).then((data) => {
    res.status(200).json(data[0]);
  });
});
productsRouter.put('/products/:id', (req, res) => {
  let id = req.params.id;
  productsModel.update(id, req.body).then(() => {
    productsModel.get(id).then((data) => {
      res.status(200).json(data[0]);
    });
  });
});
productsRouter.delete('/products/:id', (req, res) => {
  let id = req.params.id;
  productsModel.delete(id).then(() => {
    productsModel.get().then((data) => {
      const count = data.length;
      res.status(200).json({ count, data });
    });
  });
});

module.exports = productsRouter;
