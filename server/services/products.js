'use strict';

const request = require('superagent');
const querystring = require('querystring');
const config = require('config').get('services');

exports.getProducts = search => {
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

exports.getProduct = (id, filter = '') => {
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