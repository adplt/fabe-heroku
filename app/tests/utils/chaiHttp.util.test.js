const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server.util.test');
const ENDPOINTS = require('../../configs/api.config');
const { API_PATH } = require('../../variables');

chai.should();
chai.use(chaiHttp);

module.exports = {
  GET: (endpoint, token = '', params = '', query = '') => chai
    .request(server)
    .get(API_PATH + ENDPOINTS[endpoint] + params + query)
    .set('Authorization', `Bearer ${token}`),
  POST: (endpoint, token = '', payload, params = '', query = '') => chai
    .request(server)
    .post(API_PATH + ENDPOINTS[endpoint] + params + query)
    .set('Authorization', `Bearer ${token}`)
    .send(payload),
  PUT: (endpoint, token = '', payload, params = '', query = '') => chai
    .request(server)
    .put(API_PATH + ENDPOINTS[endpoint] + params + query)
    .set('Authorization', `Bearer ${token}`)
    .send(payload),
  DELETE: (endpoint, token = '', payload, params = '', query = '') => chai
    .request(server)
    .delete(API_PATH + ENDPOINTS[endpoint] + params + query)
    .set('Authorization', `Bearer ${token}`)
    .send(payload),
};
