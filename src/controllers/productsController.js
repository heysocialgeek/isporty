const path = require ("path");

const controller = {
    product: (req, res) => {
        const productPath = path.resolve (__dirname, '../views/producto.html');
        return res.sendFile (productPath)
    },
    cart: (req, res) => {
        const cartPath = path.resolve (__dirname, "../views/cart.html");
        return res.sendFile (cartPath)
    }
}

module.exports = controller