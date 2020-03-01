import redis from 'redis';

const client = redis.createClient(13080, 'http://redis-13080.c73.us-east-1-2.ec2.cloud.redislabs.com/');

client.on('error', (error) => {
  console.log('Failed to establish Redis Connection', error); // eslint-disable-line no-console
});

client.on('connect', () => {
  console.log('Redis client connected', 'http://redis-13080.c73.us-east-1-2.ec2.cloud.redislabs.com/'); // eslint-disable-line no-console
});

export default client;
