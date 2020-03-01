const { result } = require('lodash');
const { protocol } = require('../variables');
const config = require('../configs/env.config');
const http = require('../utils/http.util');

module.exports = {
  getDetailProduct: (payload) => {
    const { productId } = payload;
    const url = `${protocol.HTTP}${config.app.host}${config.app.port}`;
    const params = `/${productId}`;
    return http.GET(url, 'PRODUCT', params)
      .then((response) => {
        if (Number(response.status) === 200) return result(response, 'data.data', null);
        throw response;
      }).catch((error) => { throw error; });
  },
  getProductList: () => {
    const url = `${protocol.HTTP}${config.app.host}${config.app.port}`;
    return http.GET(url, 'PRODUCT')
      .then((response) => {
        if (Number(response.status) === 200) return result(response, 'data.data', []);
        throw response;
      }).catch((error) => { throw error; });
  },
};
