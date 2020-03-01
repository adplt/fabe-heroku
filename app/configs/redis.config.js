const redis = require('redis');
const config = require('./env.config');

const client = redis.createClient(config.redis.port, config.redis.host, config.redis.options);

client.on('error', (error) => {
  console.log('Failed to establish Redis Connection', error); // eslint-disable-line no-console
});

client.on('connect', () => {
  console.log('Redis client connected', `${config.redis.host}:${config.redis.port}`); // eslint-disable-line no-console
});

module.exports = client;
