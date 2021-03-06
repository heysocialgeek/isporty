const db = require("../../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

const productControllerdb = {
    list: async (req, res) => {
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        const products = await db.Product.findAll({/*include: ["brands", "categories", "sizes", "gender", "colors"]*/ });
        return res.render("products/list", { genders, brands, sizes, categories, colors, products })
    },

    listByBrand: async (req, res) =>{
        
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        const products = await db.Product.findAll({ where: { brandId : req.params.id } });
        return res.render("products/list", { genders, brands, sizes, categories, colors, products })
    },

    listByGender: async (req, res) =>{
        
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        const products = await db.Product.findAll({ where: { genderId : req.params.id } });
        return res.render("products/list", { genders, brands, sizes, categories, colors, products })
    },

    create: async (req, res) => {
        try {
            const genders = await db.Gender.findAll({});
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            return res.render("products/create", { genders, brands, sizes, categories, colors })
        } catch (error) {
            console.log(error);
        }
    },
    store: async (req, res) => {

        let resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            const genders = await db.Gender.findAll({});
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            return res.render("products/create", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                genders, brands, sizes, categories, colors
            });
        }

        const productStored = await db.Product.create({
            name: req.body.name,
            price: req.body.price,
            image: req.file ? req.file.filename : "",
            description: req.body.description,
            brandId: req.body.productBrand,
            genderId: req.body.productGender,
            userId: req.session.userLogged.id
        });
        productStored.addCategories(req.body.productCategory);
        productStored.addSize(req.body.productSize);
        productStored.addColor(req.body.productColor)
        return res.redirect("/products/list")
    },

    detail: async (req, res) => {
        const productID = req.params.id;
        const product = await db.Product.findByPk(productID, { include: ['categories', 'gender', 'brands', 'colors', 'sizes'] })
        const allProducts = await db.Product.findAll();
        return res.render('products/detail', { product, allProducts, user: req.session.userLogged })
    },

    editForm: async (req, res) => {
        const productID = req.params.id;
        const product = await db.Product.findByPk(productID, { include: ['categories', 'gender', 'brands', 'colors', 'sizes'] });
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        return res.render("products/edit", { product, genders, brands, sizes, categories, colors })
    },

    edit: async (req, res) => {
        const productToEdit = await db.Product.findByPk(req.params.id, { include: ["sizes", "colors", "categories"] })

        let errors = validationResult(req)

        if (errors.isEmpty()) {
            productToEdit.removeSizes(productToEdit.sizes);
            productToEdit.addSizes(req.body.productSize)
            productToEdit.removeColors(productToEdit.colors);
            productToEdit.addColors(req.body.productColor)
            productToEdit.removeCategories(productToEdit.categories);
            productToEdit.addCategories(req.body.productCategory)


            productToEdit.name = req.body.name ? req.body.name : productToEdit.name;
            productToEdit.price = req.body.price ? req.body.price : productToEdit.price;
            productToEdit.description = req.body.description;
            productToEdit.brandId = req.body.productBrand;
            productToEdit.genderId = req.body.productGender;

            productToEdit.save()
            return res.redirect("/products/list")
        }

        else {
            const productID = req.params.id;
            const product = await db.Product.findByPk(productID, { include: ['categories', 'gender', 'brands', 'colors', 'sizes'] });
            const genders = await db.Gender.findAll({});
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            // console.log("error", errors)
            return res.render("products/edit", { product, genders, brands, sizes, categories, colors, errors : errors.mapped() })
        }
    },
    delete: (req, res) => {
        db.Product.destroy({
            where: { id: req.params.id }
        }).then(a => {
            res.redirect("/products/list")
        })

        /*async (req, res) => {
        const productID = req.params.id;
        const productToDelete = await db.Product.findByPk(productID, { include: ["categories", "sizes", "colors"]});
        productToDelete.removeCategories(productToDelete.categories);
        productToDelete.removeSizes(productToDelete.sizes);
        productToDelete.removeColors(productToDelete.colors);
        productToDelete.destroy();
        return res.redirect("/products/list");*/
    },

    search: async (req, res) => {

            const products = await db.Product.findAll({
                where: {
                    name: {
                        [Op.like]: '%' + req.body.search + '%'
                    }
                },
                include: ['categories', 'sizes', 'colors']
            })

            const allProducts = await db.Product.findAll()
            return res.render('products/searchResults', { array: products, allProducts });
            
    },

    addCart: async (req, res) => {
        let cartId = req.session.cartId;
        const cart = await db.Cart.findByPk(cartId, {include: "products"})
        const user = req.session.userLogged;
        const product = await db.Product.findByPk(req.params.id)
        const productToCart = {
            userId: user.id,
            product: product
        }
        console.log("BEFORE IF", req.session.cartId)
        if(req.session.cartCreated){
            cart.addProduct(product) 
        console.log("INSIDE IF", req.session.cartId)
        } else {
            const createCart = await db.Cart.create(productToCart)
            createCart.addProduct(product)
            req.session.cartId = createCart.id
            // console.log("LLEGUE AL ELSE")
        }      
        // console.log("OUTSIDE IF", req.session.cartId)
        res.redirect('/products/cart')
    },

    cart: async (req, res) => {
        const cart = await db.Cart.findByPk(req.session.cartId, {include: "products"})
        // console.log("carrito en GET",cart);
        // console.log("PRODUCT",cart.products);
        return res.render("products/cart", {cart})
    }

}

module.exports = productControllerdb