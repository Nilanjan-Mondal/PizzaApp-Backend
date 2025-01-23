const { getCart } = require("../services/cartService");

async function getCartByUser(req, res) {

    console.log("req.user : ", req.user); // check authValidator.js

    try {
        const cart = await getCart(req.user.id);
        return res.status(200).json({
            success: true,
            message: "Cart retrieved successfully",
            error: {},
            data: cart
        })
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({
            message: error.message || "An unexpected error occurred",
            success: false,
            data: {},
            error: error
        })
    }
}

module.exports = { getCartByUser };