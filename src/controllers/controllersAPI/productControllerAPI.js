const db = require("../../database/models");
const { Op } = require("sequelize");

const controllerProduct = {
    showProducts: (req, res) => {
        db.Product.findAll()
        .then(async products => {
            const brands = await db.Brand.findAll({include: ["products"]})
            let productsByBrand = {}
            for (let i = 0; i < brands.length; i++) {
                productsByBrand[brands[i].name] = brands[i].products.length
            }
            return res.status(200).json({
                total: products.length,
                countByBrand: {...productsByBrand},
                data: {
                    product: products.map(product => {
                        delete product.dataValues.createdAt
                        delete product.dataValues.updatedAt
                        delete product.dataValues.deletedAt
                        delete product.dataValues.price
                        delete product.dataValues.image
                    return product}),
                    relaciones: []
                }
            })
        })
    }
}

module.exports = controllerProduct;