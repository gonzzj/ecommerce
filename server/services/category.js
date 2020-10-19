'use strict';

const request = require('superagent');
const config = require('config').get('services');

exports.searchCategory = (id) => {
	const timeout = config.defaultConnectionTimeout;

    const url = `${config.endpoints.apiML}categories/${id}`;
    
	console.log('API:', `Endpoint: ` + url);

	return request
		.get(url)
		.timeout(timeout)
        .ok(res => res.status < 400 || res.status === 404)
		.on('error', function(err) {
			return err;
        })
};