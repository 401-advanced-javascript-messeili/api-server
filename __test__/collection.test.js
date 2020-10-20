const productsModel = require('../lib/models/products/products.model.js');
const categoriesModel = require('../lib/models/categories/categories.model.js');
const supergoose = require('@code-fellows/supergoose');
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
  it('can get() a category item', () => {
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
       productsModel.delete(record._id).then(() => {
        return productsModel.get(record._id).then((results) => {
              expect(results[0]).toEqual(undefined);
            });
          });
      });
    });
  });

  //   it('can get() a note item', async () => {
  //     const obj = { text: 'test note', category: 'haveFun' };
  //     const expected = { text: 'test note', category: 'haveFun' };
  //     const record = await note.create(obj);
  //     const noteItem = await note.get(record._id);
  //     Object.keys(expected).forEach((key) => {
  //       expect(noteItem[0][key]).toEqual(record[key]);
  //     });
  //   });

  //   it('can delete() a note item', async () => {
  //     const obj = { text: 'test note', category: 'haveFun' };
  //     const record = await note.create(obj);
  //     await note.delete(record._id);
  //     const noteItem = await note.get(record._id);
  //     expect(noteItem[0]).toEqual(undefined);
  //   });

  //   it('can update() a note item', async () => {
  //     const obj = { text: 'test note', category: 'haveFun' };
  //     const record = await note.create(obj);
  //     await note.delete(record._id);
  //     const noteItem = await note.get(record._id);
  //     expect(noteItem[0]).toEqual(undefined);
  //   });
});
