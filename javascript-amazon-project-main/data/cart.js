export let cart = [{
    productid: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 20
}, {
    productid: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 10
}
];

export function addToCart(productId) {
    const existingProduct = cart.find(cartItem => cartItem.productid === productId);
    if(existingProduct) {
        existingProduct.quantity += 1;
    } else { 
        cart.push({
            productid: productId,
            quantity: 1
        });
    }
}
