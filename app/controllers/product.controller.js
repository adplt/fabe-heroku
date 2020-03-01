const { isEmpty } = require('lodash');
const puppeteer = require('puppeteer');
const { productFormat } = require('../utils/payload.util');
const client = require('../configs/redis.config');
const { redisKey } = require('../variables');
const { protocol } = require('../variables');
const config = require('../configs/env.config');
const endpoints = require('../configs/api.config');

module.exports = {
  inputLink: async (req, res) => {
    try {
      const { link } = req.body;
      client.get(redisKey.PRODUCT, async (err1, product) => {
        if (!isEmpty(err1)) throw err1;

        const existingProduct = JSON.parse(product) || [];
        let checkExisting = existingProduct.filter((prod) => prod.product_link === link);
        if (isEmpty(checkExisting)) {
          /* scrapping */
          const browser = await puppeteer.launch({ headless: true });
          const page = await browser.newPage();
          await page.goto(link);
          await page.waitForSelector('img.fotorama__img');
          const images = await page.$$eval('img.fotorama__img[src]', (imgs) => imgs.map((img) => img.getAttribute('src')));
          // const images = await page.$$eval(
          //   'div.fotorama__nav__frame.fotorama__nav__frame--thumb[href]',
          //   (imgs) => imgs.map(async () => {
          //     await page.click('div[class=".fotorama__arr__arr"]');
          //     return document
          //       .querySelector(
          //         `div.${'fotorama__stage__frame'
          //       }.${'fotorama__active'
          //       }.${'fotorama_horizontal_ratio'
          //       }.${'fotorama__loaded'
          //       }.${'fotorama__loaded--img'}`
          //       ).getAttribute('href');
          // }));
          const resultSet = await page.evaluate(() => ({
            product_title: document.querySelector('span.base').innerText,
            product_price: document.querySelector('span.price').innerText,
            product_description: document.querySelector('div#description').innerText,
          }));
          await page.close();
          await browser.close();

          /* save to redis */
          let saveProduct = await productFormat(req.body);
          saveProduct = { ...saveProduct, ...resultSet, product_images: images };
          checkExisting = saveProduct;
          existingProduct.push(saveProduct);
          client.set(redisKey.PRODUCT, JSON.stringify(existingProduct));
        } else [checkExisting] = checkExisting;

        const url = `${protocol.HTTP}${config.app.host}${config.app.port}`;
        const params = `/${checkExisting.product_id}`;
        const goToUrl = `${url}${endpoints.VIEW_PRODUCT_DETAIL}${params}`;
        res.status(200).redirect(goToUrl);
      });
    } catch (error) {
      res.status(500).json({
        data: null,
        status: 'ERROR',
        message: error.message,
      });
    }
  },
  getProductList: (req, res) => {
    try {
      client.get(redisKey.PRODUCT, async (err, product) => {
        if (!isEmpty(err)) throw err;
        res.status(200).json({
          status: 'OK',
          data: JSON.parse(product),
          message: 'Get product list successfully',
        });
      });
    } catch (error) {
      res.status(500).json({
        data: null,
        status: 'ERROR',
        message: error.message,
      });
    }
  },
  getProductDetail: (req, res) => {
    try {
      const { productId } = req.params;
      client.get(redisKey.PRODUCT, async (err, product) => {
        if (!isEmpty(err)) throw err;
        let productlist = JSON.parse(product) || [];
        productlist = productlist.filter((prod) => prod.product_id === productId);
        res.status(200).json({
          status: 'OK',
          data: productlist[0],
          message: 'Get detail product successfully',
        });
      });
    } catch (error) {
      res.status(500).json({
        data: null,
        status: 'ERROR',
        message: error.message,
      });
    }
  },
  deleteKeys: (req, res) => {
    try {
      const { key } = req.params;
      client.del(key);
      client.get(key, async (err, result) => {
        if (!isEmpty(err)) throw err;
        const existingResult = JSON.parse(result) || [];
        res.status(200).json({
          status: 'OK',
          data: existingResult,
          message: 'Get existing result successfully',
        });
      });
    } catch (error) {
      res.status(500).json({
        data: null,
        status: 'ERROR',
        message: error.message,
      });
    }
  },
};
