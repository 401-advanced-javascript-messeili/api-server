'use strict';
const productsModel = require('./products.schema');
const Collection = require('../mongo.js');
class Product extends Collection {
  constructor() {
    super(productsModel);
  }
}
module.exports = new Product();
