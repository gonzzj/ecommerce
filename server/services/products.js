'use strict';

const request = require('superagent');
const querystring = require('querystring');
const config = require('config').get('services');
const utils = require('../utils/utils');
const author = require('../mocks/author.json');

const getProducts = search => {
    const timeout = config.defaultConnectionTimeout;
    
    const queryParams = {
		q: search
	};

	const url = `${config.endpoints.apiML + config.endpoints.productSearch}?${querystring.stringify(queryParams)}`;

	console.log('API:', `Endpoint: ` + url);

	return request
		.get(url)
		.timeout(timeout)
        .ok(res => res.status < 400 || res.status === 404)
		.on('error', function(err) {
			return err;
        })
};

const getProduct = (id, filter = '') => {
	const timeout = config.defaultConnectionTimeout;

	const url = `${config.endpoints.apiML}items/${id}/${filter}`;

	console.log('API:', `Endpoint: ` + url);

	return request
		.get(url)
		.timeout(timeout)
        .ok(res => res.status < 400 || res.status === 404)
		.on('error', function(err) {
			return err;
        })
};

exports.getProducts = async (req, res) => {
	let productsResponse;
    const search = req.query.q;

	try {
		console.log('--- Start getting products ---');
		productsResponse = await getProducts(search);
		console.log('--- Finish getting products ---');
	} catch (err) {
		throw err;
	}

	if (productsResponse.ok) {
		const body = productsResponse.body;
		const products = {
			"author": author,
			"items": utils.parseProducts(body.results)
		};

        res.setHeader('Content-Type', 'application/json');
		return res.send(products);
	} else {
		return res.status(productsResponse.status).send(JSON.stringify(productsResponse.body));
	}
};

exports.getProduct = async (req, res) => {
	let productResponse;
	let descriptionResponse;
	const id = req.params.id;

	try {
		console.log('--- Start getting product ---');
		productResponse = await getProduct(id);
		descriptionResponse = await getProduct(id, 'description');
		console.log('--- Finish getting product ---');
	} catch (err) {
		throw err;
	}

	if (productResponse.ok && descriptionResponse.ok) {
		const body = productResponse.body;
		let product = {
			"author": author,
			"item": utils.parseProduct(body)
		};
		
		product.item.description = descriptionResponse.body.plain_text;

        res.setHeader('Content-Type', 'application/json');
		return res.send(product);
	} else {
		return res.status(productResponse.status).send(JSON.stringify(productResponse.body));
	}
};