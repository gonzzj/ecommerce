'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const compress = require('compression');
const app = express();
const routes = require('./routes/api');

app.use(compress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.get('/api/items', routes.getProducts);
app.get('/api/items/:id', routes.getProduct);

module.exports = app;