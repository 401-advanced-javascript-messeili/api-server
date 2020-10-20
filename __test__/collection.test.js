'use strict';
require('@code-fellows/supergoose');
const productsModel = require('../lib/models/products/products.model.js');
const categoriesModel = require('../lib/models/categories/categories.model.js');
let productObj = {
  name: 'laptops',
  display_name: 'laptops',
  description: 'this category contain all laptops',
  category: 'smart phones',
};
let categoryObj = {
  name: 'laptops',
  display_name: 'laptops',
  description: 'this category contain all laptops',
};

describe('collection Model', () => {
  it('can create() a new product item', () => {
    return productsModel.create(productObj).then((record) => {
      Object.keys(productObj).forEach((key) => {
        expect(record[key]).toEqual(productObj[key]);
      });
    });
  });
  it('can create() a new category item', () => {
    return categoriesModel.create(categoryObj).then((record) => {
      Object.keys(categoryObj).forEach((key) => {
        expect(record[key]).toEqual(categoryObj[key]);
      });
    });
  });
  it('can get() a product item', () => {
    return productsModel.create(productObj).then((record) => {
      return productsModel.get(record._id).then((results) => {
        Object.keys(productObj).forEach((key) => {
          expect(results[0][key]).toEqual(productObj[key]);
        });
      });
    });
  });
  it('can get() a category', () => {
    return categoriesModel.create(categoryObj).then((record) => {
      return categoriesModel.get(record._id).then((results) => {
        Object.keys(categoryObj).forEach((key) => {
          expect(results[0][key]).toEqual(categoryObj[key]);
        });
      });
    });
  });
  it('can delete() a product item', () => {
    return productsModel.create(productObj).then((record) => {
      return productsModel.delete(record._id).then(() => {
        return productsModel.get(record._id).then((results) => {
          expect(results[0]).toEqual(undefined);
        });
      });
    });
  });
  it('can delete() a category', () => {
    return categoriesModel.create(categoryObj).then((record) => {
      return categoriesModel.delete(record._id).then(() => {
        return categoriesModel.get(record._id).then((results) => {
          expect(results).toEqual([]);
        });
      });
    });
  });

  it('can update() a product', () => {
    let newObj = {
      name: 'new laptops',
      display_name: 'new laptops',
      description: 'this category contain all laptops',
      category: 'smart phones',
    };
    return productsModel.create(productObj).then((record) => {
      return productsModel.update(record._id, newObj).then(() => {
        return productsModel.get(record._id).then((results) => {
          Object.keys(productObj).forEach((key) => {
            expect(results[0][key]).toEqual(newObj[key]);
          });
        });
      });
    });
  });

  it('can update() a category', () => {
    let newObj = {
      name: 'new laptops',
      display_name: 'new laptops',
      description: 'this category contain all laptops',
    };
    return categoriesModel.create(categoryObj).then((record) => {
      return categoriesModel.update(record._id, newObj).then(() => {
        return categoriesModel.get(record._id).then((results) => {
          Object.keys(categoryObj).forEach((key) => {
            expect(results[0][key]).toEqual(newObj[key]);
          });
        });
      });
    });
  });
});
