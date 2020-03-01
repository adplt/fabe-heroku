const { v4 } = require('uuid');

module.exports = {
  productFormat: (payload) => ({
    product_id: v4(),
    product_name: payload.productName,
    product_link: payload.link,
  }),
};
