# Fabelio Web

## Instructions

#### Running the code

1. `git clone https://github.com/adplt/fabe-heroku.git`
2. `yarn` (Don't do npm install as the updated depencies are locked in yarn.lock)
3. Do `npm start`. Then, load `http://localhost:3000/` in a browser to see the output.

#### Available scripts

1. npm start
2. npm run test
3. npm run lint:fix
4. npm run prod:new
5. npm run prod


### Coding Practices

For connect to database, each API will always call connect function (look at Sample Connect to Redis on Code Snipped). It can not be separate file because the database will always return null / undefined.

## Code Snippets

- HTTP GET METHOD:

```
const express = require('express');
const app = express.Router();

app.get('/', function (req, res) {
  res.send('Hello World!')
})
```

- HTTP POST METHOD:

```
const express = require('express');
const app = express.Router();

app.post('/', function (req, res) {
  res.send('Got a POST request')
})

```

- Sample Connect to Redis:

```
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

```

- Sample UI in .ejs (actually same like .html):

```
<nav class="navbar navbar-default" role="navigation">
<div class="container-fluid">

    <div class="navbar-header">
        <a class="navbar-brand" href="/">
            <span class="glyphicon glyphicon glyphicon-tree-deciduous"></span>
            Fabelio
        </a>

        <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/list">List</a></li>
        </ul>
    </div>

</div>
</nav>

```

- Sample Style Sheet:

```
body {
  padding: 50px;
  font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;
}

a {
  color: #00B7FF;
}
```

#### Naming conventions :

1. Every API must in routes folder and API must be arranged in a folder.
2. For view, you can custom in `views` folder.
3. `resource` folder is already configured in `app.js` file.

## Production Deployment steps

```
==========================
Prod Web
==========================
- Do npm run prod:new if you are new to deploy. If not, do npm run prod.
```

## Encryption and decryption:


#### Decryption

To **decrypt** the existing encrypted files run the command:

```

```


For example:

```

```

**NOTE:** .


#### Encryption

To encrypt a file use the following command:

```

```

Then enter the password to encrypt when prompted.

**NOTE:** .
