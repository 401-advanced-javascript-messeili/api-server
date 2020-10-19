'use strict';
const { server } = require('../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('not found middleware', () => {
  it('should respond with 404 on a wrong route', () => {
    return mockRequest.get('/foo').then((results) => {
      expect(results.status).toBe(404);
    });
  });

  it('should respond with specific error msg', () => {
    return mockRequest.get('/foo').then((results) => {
      expect(results.res.statusMessage).toEqual('Not Found :(');
    });
  });

  //   it('define property statusMessage correctly', () => {
  //     notFound(req, res, next);
  //     expect(req.statusMessage).toEqual('Not Found :(');
  //   });
  //   it('define property statusMessage correctly', () => {
  //     notFound(req, res, next);
  //     expect(res.status).toEqual(404);
  //   });
});
