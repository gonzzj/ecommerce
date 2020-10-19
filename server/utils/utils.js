exports.parseProducts = results => {
    let products = [];
    const maxProducts = 4;

    results.slice(0, maxProducts).forEach(item => {
        products.push(this.parseProduct(item));
    });

    return products;
};

exports.parseProduct = item => {
    return {
        "id": item.id,
        "title": item.title,
        "price": {
            "currency": item.currency_id,
            "amount": item.price
        },
        "picture": item.thumbnail,
        "condition": item.condition,
        "free_shipping": item.shipping.free_shipping,
        "sold_quantity": item.sold_quantity
    };
};

exports.getCategory = results => {
    const categories = new Map();
    let resultCat = '';
    let resultCatQuant = 0;

    for (const item of results) {
        if (categories.has(item.category_id)) {
            categories.set(item.category_id, categories.get(item.category_id) + 1);
        } else {
            categories.set(item.category_id, 1);
        }
    }

    for (const [category, quantity] of categories) {
        if (quantity > resultCatQuant) {
            resultCatQuant = quantity;
            resultCat = category;
        }
    }

    return resultCat;
};