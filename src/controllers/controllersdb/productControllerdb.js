const db = require("../../database/models");

const productControllerdb = {
    list: async (req, res) => {
        const products = await db.Product.findAll({include: ["brand", "categories"]});
        return res.render ("productList")
    },
    create: async (req, res) => {
        try {
            const genders = await db.Gender.findAll({});
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            return res.render("create", {genders, brands, sizes, categories, colors})
        } catch (error) {
            console.log(error);
        }
    },
    store: async (req, res) => {
        const productStore = await Product.create(req.body);
        return res.redirect("/products/list")
    }
}

module.exports = productControllerdb