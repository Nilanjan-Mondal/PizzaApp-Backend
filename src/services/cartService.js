const { getCartByUserId } = require("../repositories/cartRepository");

async function getCart(userId) {
    const cart = await getCartByUserId(userId);
    if(!cart) {
        throw new Error("Cart not found");
    }
    return cart;
}

module.exports = { getCart };