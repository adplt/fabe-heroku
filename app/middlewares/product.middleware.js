const { isEmpty } = require('lodash');
const Joi = require('joi');

module.exports = {
  inputLink: (req, res, next) => {
    try {
      const schema = Joi.object().keys({
        link: Joi.string().required(),
      });
      const result = Joi.validate(req.body, schema);
      if (isEmpty(result.error)) next();
      else {
        const error = result.error.message;
        res.status(400).json({
          data: null,
          status: 'ERROR',
          message: error,
        });
      }
    } catch (error) {
      res.status(500).json({
        data: null,
        status: 'ERROR',
        message: error.message,
      });
    }
  },
  getProductList: (req, res, next) => {
    try {
      const schema = Joi.object().keys({});
      const result = Joi.validate({ ...req.params, ...req.query, ...req.body }, schema);
      if (isEmpty(result.error)) next();
      else {
        const error = result.error.message;
        res.status(400).json({
          data: null,
          status: 'ERROR',
          message: error,
        });
      }
    } catch (error) {
      res.status(500).json({
        data: null,
        status: 'ERROR',
        message: error.message,
      });
    }
  },
  getProductDetail: (req, res, next) => {
    try {
      const schema = Joi.object().keys({
        productId: Joi.string().guid().required(),
      });
      const result = Joi.validate(req.params, schema);
      if (isEmpty(result.error)) next();
      else {
        const error = result.error.message;
        res.status(400).json({
          data: null,
          status: 'ERROR',
          message: error,
        });
      }
    } catch (error) {
      res.status(500).json({
        data: null,
        status: 'ERROR',
        message: error.message,
      });
    }
  },
};
