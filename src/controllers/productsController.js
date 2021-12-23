const path = require ("path");

const controller = {
    product: (req, res) => {
        const productPath = path.resolve (__dirname, '../views/producto.ejs');
        return res.render (productPath)
    },
    cart: (req, res) => {
        const cartPath = path.resolve (__dirname, "../views/cart.ejs");
        return res.render (cartPath)

        
    },
    index: (req, res) => {
        const cartPath = path.resolve (__dirname, "../views/index.ejs");
        return res.render (cartPath)

        
    }
}

module.exports = controller