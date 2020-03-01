const express = require('express');
const product = require('./product.route');
const { getDetailProduct, getProductList } = require('../services/product.services');
const productControllers = require('../controllers/product.controller');

const router = express.Router();

router.use('/product', product);

// detail product
router.get('/detail/:productId', async (req, res) => {
  const productDetail = await getDetailProduct(req.params);
  res.render('./pages/detail', { product: productDetail });
});

// list product
router.get('/list', async (req, res) => {
  const productDetail = await getProductList();
  res.render('./pages/list', { products: productDetail });
});

/* GET home page. */
router.get('/', (req, res) => { res.render('./pages/index'); });

router.delete('/keys/:key', productControllers.deleteKeys);

module.exports = router;
