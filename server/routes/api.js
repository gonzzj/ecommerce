const utils = require('../utils/utils');
const author = require('../mocks/author.json');
const categoryService = require('../services/category');
const productsService = require('../services/products');

exports.getProducts = async (req, res) => {
	let productsResponse;
    const search = req.query.q;

	try {
		console.log('--- Start getting products ---');
		productsResponse = await productsService.getProducts(search);
		console.log('--- Finish getting products ---');
	} catch (err) {
		throw err;
	}

	if (productsResponse.ok) {
		const body = productsResponse.body;
		const categories = [];

		await categoryService.searchCategory(utils.getCategory(body.results)).then(category => {
			for (const item of category.body.path_from_root) {
				categories.push(item.name);
			}
		});

		const products = {
			"author": author,
			"categories": categories,
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
		productResponse = await productsService.getProduct(id);
		descriptionResponse = await productsService.getProduct(id, 'description');
		console.log('--- Finish getting product ---');
	} catch (err) {
		throw err;
	}

	if (productResponse.ok && descriptionResponse.ok) {
		const body = productResponse.body;
		const categories = [];

		await categoryService.searchCategory(body.category_id).then(category => {
			for (const item of category.body.path_from_root) {
				categories.push(item.name);
			}
		});

		let product = {
			"author": author,
			"categories": categories,
			"item": utils.parseProduct(body)
		};
		
		product.item.description = descriptionResponse.body.plain_text;

        res.setHeader('Content-Type', 'application/json');
		return res.send(product);
	} else {
		return res.status(productResponse.status).send(JSON.stringify(productResponse.body));
	}
};