const messages = {
    default: {
        label : {
            ARS: "$",
            USD: "U$S",
            error404: "Error - 404: La página no fue encontrada",
            headerLogo: "Mercado Libre Argentina - Donde comprar y vender de todo",
            productsNotFound: "No se encontraron productos",
            productNotFound: "El producto no existe",
            productDescription: "Descripción del producto",
            productBuyButton: "Comprar",
            productSells: "vendidos",
            new: "Nuevo",
            used: "Usado",
            freeShipping: "¡Envío gratis!"
        },
        placeholder: {
            searchPlaceholder: "Buscar productos, marcas y más..."
        }
    }
};

export const getMessageLabel = (key, lang = 'default') => {
    return messages[lang]['label'][key];
};

export const getMessagePlaceholder = (key, lang = 'default') => {
    return messages[lang]['placeholder'][key];
};