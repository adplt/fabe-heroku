const express = require('express');
const productMiddleware = require('../middlewares/product.middleware');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/:productId', productMiddleware.getProductDetail, productController.getProductDetail);
router.get('/', productMiddleware.getProductList, productController.getProductList);

router.post('/', productMiddleware.inputLink, productController.inputLink);

module.exports = router;
