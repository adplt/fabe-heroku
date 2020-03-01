require('dotenv').config();

const env = process.env.NODE_ENV || 'dev'; // 'dev', 'test', 'prod

const dev = {
  app: {
    host: process.env.DEV_APP_HOST,
    port: process.env.DEV_APP_PORT,
  },
  db: {
    host: process.env.DEV_DB_HOST,
    port: Number(process.env.DEV_DB_PORT),
    name: process.env.DEV_DB_NAME,
    user: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    dialect: process.env.DEV_DB_DIALECT,
  },
  redis: {
    host: process.env.DEV_REDIS_HOST,
    port: process.env.DEV_REDIS_PORT,
    options: {
      password: process.env.DEV_REDIS_PASSWORD,
    },
  },
};

const test = {
  app: {
    host: process.env.TEST_APP_HOST,
    port: process.env.TEST_APP_PORT,
  },
  db: {
    host: process.env.TEST_DB_HOST,
    port: Number(process.env.TEST_DB_PORT),
    name: process.env.TEST_DB_NAME,
    user: process.env.TEST_DB_USER,
    password: process.env.TEST_DB_PASSWORD,
    dialect: process.env.TEST_DB_DIALECT,
  },
  redis: {
    host: process.env.TEST_REDIS_HOST,
    port: process.env.TEST_REDIS_PORT,
    options: {
      password: process.env.TEST_REDIS_PASSWORD,
    },
  },
};

const prod = {
  app: {
    host: process.env.PROD_APP_HOST,
    port: process.env.PROD_APP_PORT,
  },
  db: {
    host: process.env.PROD_DB_HOST,
    port: Number(process.env.PROD_DB_PORT),
    name: process.env.PROD_DB_NAME,
    user: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    dialect: process.env.PROD_DB_DIALECT,
  },
  redis: {
    host: process.env.PROD_REDIS_HOST,
    port: process.env.PROD_REDIS_PORT,
    options: {
      password: process.env.PROD_REDIS_PASSWORD,
    },
  },
};

const config = {
  dev,
  test,
  prod,
};

module.exports = config[env];
