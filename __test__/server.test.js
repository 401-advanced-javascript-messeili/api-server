'use strict';
const { server } = require('../lib/server.js');
require('@code-fellows/supergoose');
const productsModel = require('../lib/models/products/products.model.js');
const categoriesModel = require('../lib/models/categories/categories.model.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

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

describe('api server', () => {
  it('should respond with 500 on an error', async () => {
    await mockRequest.get('/bad').then((results) => {
      expect(results.status).toBe(500);
    });
  });

  it('should respond with 404 on a wrong route', () => {
    return mockRequest.get('/foo').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 200 on a correct route', () => {
    return mockRequest.get('/api/v1/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('should respond with 404 on a wrong method', () => {
    return mockRequest.post('/').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('can create() a category', () => {
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((results) => {
        let record = results.body;
        Object.keys(categoryObj).forEach((key) => {
          expect(record[key]).toEqual(categoryObj[key]);
          expect(results.status).toBe(201);
        });
      });
  });

  it('can create() a product', () => {
    return mockRequest
      .post('/api/v2/products')
      .send(productObj)
      .then((results) => {
        let record = results.body;
        Object.keys(productObj).forEach((key) => {
          expect(record[key]).toEqual(productObj[key]);
          expect(results.status).toBe(201);
        });
      });
  });

  it('can get() a category', () => {
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((data) => {
        return mockRequest
          .get(`/api/v1/categories/${data.body._id}`)
          .then((record) => {
            expect(record.body.name).toEqual(categoryObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('can get() a product', () => {
    return mockRequest
      .post('/api/v2/products')
      .send(productObj)
      .then((data) => {
        return mockRequest
          .get(`/api/v2/products/${data.body._id}`)
          .then((record) => {
            expect(record.body.name).toEqual(productObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('can update() a category', () => {
    let newObj = {
      name: 'new category',
      display_name: 'laptops',
      description: 'this category contain all laptops',
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((data) => {
        return mockRequest
          .put(`/api/v1/categories/${data.body._id}`)
          .send(newObj)
          .then((record) => {
            expect(record.body.name).toEqual(newObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('can update() a product', () => {
    let newObj = {
      name: 'new product',
      display_name: 'laptops',
      description: 'this category contain all laptops',
      category: 'new one',
    };
    return mockRequest
      .post('/api/v2/products')
      .send(productObj)
      .then((data) => {
        return mockRequest
          .put(`/api/v2/products/${data.body._id}`)
          .send(newObj)
          .then((record) => {
            expect(record.body.name).toEqual(newObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('can delete() a category', () => {
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((data) => {
        return mockRequest
          .delete(`/api/v1/categories/${data.body._id}`)
          .then(() => {
            return mockRequest
              .get(`/api/v1/categories/${data.body._id}`)
              .then((record) => {
                expect(record.body).toEqual('');
                expect(record.status).toBe(200);
              });
          });
      });
  });

  it('can delete() a category', () => {
    return mockRequest
      .post('/api/v2/products')
      .send(productObj)
      .then((data) => {
        return mockRequest
          .delete(`/api/v2/products/${data.body._id}`)
          .then(() => {
            return mockRequest
              .get(`/api/v2/products/${data.body._id}`)
              .then((record) => {
                expect(record.body).toEqual('');
                expect(record.status).toBe(200);
              });
          });
      });
  });
});
