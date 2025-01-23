const Cart = require("../schema/cartSchema")

async function createCart(userId) {
    try {
        const newCart = await Cart.create({
            user: userId,
        });
        return newCart;
    } catch (error) {
        throw error;
    }
}

async function getCartByUserId(userId) {
    try {
        const cart = await Cart.findOne({ user: userId });
        return cart;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCart,
    getCartByUserId
}