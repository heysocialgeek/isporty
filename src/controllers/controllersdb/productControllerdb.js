const db = require("../../database/models");

const productControllerdb = {
    list: async (req, res) => {
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        const products = await db.Product.findAll({/*include: ["brands", "categories", "sizes", "gender", "colors"]*/});
        return res.render ("products/list", {genders, brands, sizes, categories, colors, products})
    },
    create: async (req, res) => {
        try {
            const genders = await db.Gender.findAll({});
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            return res.render("products/create", {genders, brands, sizes, categories, colors})
        } catch (error) {
            console.log(error);
        }
    },
    store: async (req, res) => {
        const productStore = await db.Product.create(req.body);
        productStore.addCategories(req.body.productCategory);
        // productStore.addGender(req.body.productGender);
        // productStore.addColors(req.body.productColor);
        // productStore.addSizes(req.body.productSize);
        // productStore.addBrands(req.body.productBrand);
        return res.redirect("/products/list")
    }
}

module.exports = productControllerdb