'use strict';
const categoriesModel = require('./categories.schema');
const Collection = require('../mongo.js');
class Category extends Collection {
  constructor() {
    super(categoriesModel);
  }
}
module.exports = new Category();
