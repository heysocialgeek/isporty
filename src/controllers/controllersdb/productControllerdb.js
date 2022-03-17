const db = require("../../database/models");

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
        const productStored = await db.Product.create({
            name: req.body.name,
            price: req.body.price,
            image: req.file ? req.file.filename : "",
            description: req.body.description,
            brandId: req.body.productBrand,
            genderId: req.body.productGender
        });
        productStored.addCategories(req.body.productCategory);
        productStored.addSize(req.body.productSize);
        productStored.addColor(req.body.productColor)
        return res.redirect("/products/list")
    },

    detail: async (req, res) => {
        const productID = req.params.id;
        const product = await db.Product.findByPk(productID, { include: ['categories', 'gender', 'brands', 'colors', 'sizes'] })
        return res.render('products/detail', { product })
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
        //findbypk, luego remover relaciones y luego crear las relaciones
        const productID = req.params.id;
        const productUpdate = await db.Product.update({
            name: req.body.name,
            price: req.body.price,
            // image: req.file ? req.file.filename : "",
            description: req.body.description,
            brandId: req.body.productBrand,
            genderId: req.body.productGender
        },
        {where: {id: productID}});
        return res.redirect("/products/detail/" + productID)
    },
    delete: async (req, res) => {
        
    }

}

module.exports = productControllerdb