const db = require ("../../database/models");

const mainControllerdb = {
    index: async (req,res) => {
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        const productsDB = await db.Product.findAll({/*include: ["brands", "categories", "sizes", "gender", "colors"]*/ });
        return res.render("index", { productsDB, genders, brands, sizes, categories, colors })
    }

}
 
module.exports= mainControllerdb