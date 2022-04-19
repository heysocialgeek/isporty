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
                        product.dataValues.detail = `http://localhost:3003/api/products/${product.id}`
                    return product}),
                    // relaciones: []
                }
            })
        })
    },
    detailProducts: (req, res) => {
        db.Product.findByPk(req.params.id, {include:["sizes", "colors", "categories", "gender"]})
            .then( product => {
                return res.status(200).json({
                    data: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        gender: product.gender.name
                    },
                    relación: [{
                        color: product.colors.map(oneColor => {
                            return oneColor.name
                        })
                    },{
                        size: product.sizes.map(oneSizes => {
                            return oneSizes.name
                        })
                    },{
                        categories: product.categories.map(oneCategory => {
                            return oneCategory.name
                        })
                    }],
                    URLimage: `http://localhost:3003/img/products/${product.image}`
                })
            })
    }
}

module.exports = controllerProduct;