const fs = require("fs")
const path = require("path");

//path al JSON products//
const productJSONpath = path.resolve(__dirname, "../../data/products.json");

// contenido de la Data Base//
const productsDB = JSON.parse(fs.readFileSync(productJSONpath, "utf-8"));

const controller = {
    detail: (req, res) => {
        const detailPath = path.resolve(__dirname, "../views/products/detail.ejs");
        const id = Number(req.params.id);
        const product = productsDB.find(oneProduct => oneProduct.id === id);
        return res.render(detailPath, { product })
    },
    cart: (req, res) => {
        const cartPath = path.resolve(__dirname, "../views/products/cart.ejs");
        return res.render(cartPath)
    },
    index: (req, res) => {
        const indexPath = path.resolve(__dirname, "../views/products/index.ejs");
        return res.render(indexPath)
    },
    productList: (req, res) => {
        const productListPath = path.resolve(__dirname, "../views/products/productList");
        return res.render(productListPath, { productsDB })
    },
    productCreationForm: (req, res) => {
        const productCreationForm = path.resolve(__dirname, "../views/products/create.ejs");
        return res.render(productCreationForm)
    },

    create: (req, res) => {

        const generateID = () => {
            const lastProduct = productsDB[productsDB.length - 1];
            const lastID = lastProduct.id;
            return lastID + 1;
        }

        productsDB.push({
            id: generateID(),
            name: req.body.productName,
            price: req.body.productPrice,
            gender: req.body.productGender,
            brand: req.body.productBrand,
            size: req.body.productSize,
            color: req.body.productColor,
            Category: req.body.productCategory,
            description: req.body.productDescription,
            image: req.file ? req.file.filename : ''

        });

        fs.writeFileSync(productJSONpath, JSON.stringify(productsDB, null, ' '))

        res.redirect('/product/productlist')
    },

    formularioedit: (req, res) => {
		// Obtenemos el ID que vino como parámetro en la ruta (los parámetros viene en formato String)
		const id = Number(req.params.id); // Number() nos dá el el valor en formato Number
		// Buscamos al producto dentro del array que corresponda con ese id
		const product = productsDB.find(oneProduct => oneProduct.id === id);
        const formularioEditPath = path.resolve(__dirname, '../views/products/formularioedit')
		return res.render(formularioEditPath, {
			product		});
	},

    editproduct: (req, res) => {
        const id = Number(req.params.id);

        const productsEdited = productsDB.map
            (oneProduct => {
                if (oneProduct.id === id) {
                    return {
                        ...oneProduct,
                        name: req.body.idProducto,
                        marca: req.body.idMarca,
                        modelo: req.body.idModelo,
                        price: req.body.precio,
                        cantidad: req.body.idcantidad,
                        description: req.body.comentario,
                        talle: req.body.talle,
                        category: req.body.category,
                        color: req.body.color
                    }
                }
            return oneProduct;
            });

        fs.writeFileSync(productJSONpath, JSON.stringify(productsEdited, null, ' '));

        return res.redirect ('/product/productList')
},

        delete : (req, res) => {
        const finalProductList = productsDB.filter (product => product.id !== Number(req.params.id));
        fs.writeFileSync( productJSONpath, JSON.stringify(finalProductList, null, ""));
    
         return res.redirect("/product/productlist")
}
}

module.exports = controller