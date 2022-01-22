const fs = require ("fs")
const path = require ("path");

//path al JSON products//
const productJSONpath = path.resolve(__dirname, "../../data/products.json");

// contenido de la Data Base//
const productsDB = JSON.parse (fs.readFileSync(productJSONpath,"utf-8"));

const controller = {
    detail: (req, res) => {
        const productPath = path.resolve (__dirname, '../views/products/detail.ejs');
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
        const productListPath = path.resolve (__dirname, "../views/products/productList");
        return res.render (productListPath, {productsDB})
    },
    productCreationForm: (req, res) => {
        const productCreationForm = path.resolve (__dirname, "../views/products/formularioDeCreacion.ejs");
        return res.render (productCreationForm)
    },
    store: (req, res) => {
        const generateID = () => {
            const lastProduct = productsDB[productsDB.length - 1];
			const lastID = lastProduct.id;
			return lastID + 1;
        }
        productsDB.push({
			id: generateID(),
			...req.body
		});

		// Reescribo el archivo JSON
		fs.writeFileSync(productJSONpath, JSON.stringify(productsDB, null, " "));

		// Redirección
		return res.redirect("/producto");
    },
    formularioedit: (req, res) => {
        const formularioEditPath = path.resolve (__dirname, '../views/products/formularioedit');
        return res.render (formularioEditPath)
}

}

module.exports = controller