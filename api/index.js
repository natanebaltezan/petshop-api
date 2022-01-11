const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const router = require('./routes/providers');

const port = config.get('api.port');

app.use(bodyParser.json);

app.use('api/providers', router)

app.listen = (port, () => console.log('funcionou'));
