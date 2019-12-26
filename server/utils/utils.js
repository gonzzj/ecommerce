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
            "amount": item.price,
            "decimals": 0
        },
        "picture": item.thumbnail,
        "condition": item.condition,
        "free_shipping": item.shipping.free_shipping,
        "sold_quantity": item.sold_quantity,
    };
};