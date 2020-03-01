const chaiHttp = require('./chaiHttp.util.test');

/*
* PRODUCT API
* */

module.exports = {
  getProductList: (token, params, query) => chaiHttp.GET('PRODUCT', token, params, query),
  getProductDetail: (token, params, query) => chaiHttp.GET('PRODUCT', token, params, query),
  inputProductLink: (token, payload, params, query) => chaiHttp.POST('PRODUCT', token, payload, params, query),
};
