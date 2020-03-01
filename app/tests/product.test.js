const api = require('./utils/api.util.test');
const { initialTestSetup, checkCommonResponse } = require('./utils/helpers/common.helper');
const { checkProductListResponse, checkProductDetailResponse } = require('./utils/helpers/product.helper');

const env = process.env.NODE_ENV;

describe('Product', () => {
  let token;
  let payload;

  before(async () => {
    if (env === 'test') token = await initialTestSetup();
  });

  it('It should get product list', async () => {
    const res = await api.getProductList(token);
    checkCommonResponse(res);
    checkProductListResponse(res, payload);
    payload = { ...payload, productId: res.body.data[0].product_id };
  });

  it('It should get product detail', async () => {
    const params = `/${payload.productId}`;
    const res = await api.getProductList(token, params);
    checkCommonResponse(res);
    checkProductDetailResponse(res, payload);
  });
});
