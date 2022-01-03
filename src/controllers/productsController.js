const path = require ("path");

const controller = {
    product: (req, res) => {
        const productPath = path.resolve (__dirname, '../views/products/producto.ejs');
        return res.render (productPath)
    },
    cart: (req, res) => {
        const cartPath = path.resolve (__dirname, "../views/products/cart.ejs");
        return res.render (cartPath)
    },
    index: (req, res) => {
        const indexPath = path.resolve (__dirname, "../views/products/index.ejs");
        return res.render (indexPath)
    },
    productList: (req, res) => {
        const productListPath = path.resolve (__dirname, "../views/products/productList.ejs");
        return res.render (productListPath)
    },
    productCreationForm: (req, res) => {
        const productCreationForm = path.resolve (__dirname, "../views/products/formularioDeCreacion.ejs");
        return res.render (productCreationForm)
    },
    formularioedit: (req, res) => {
        const formularioEditPath = path.resolve (__dirname, '../views/products/formularioedit');
        return res.render (formularioEditPath)
}

}

module.exports = controller