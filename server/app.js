'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const compress = require('compression');
const app = express();
const products = require('./services/products');

app.use(compress());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.get('/api/items', products.getProducts);
app.get('/api/items/:id', products.getProduct);

module.exports = app;