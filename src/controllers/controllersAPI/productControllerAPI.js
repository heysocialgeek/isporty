const db = require("../../database/models");
const { Op } = require("sequelize");

const controllerProduct = {
    showProducts: (req, res) => {
        db.Product.findAll({include: ["brands"]})
        .then(products => {
            return res.status(200).json({
                total: products.length,
                countByBrand: {
                    nike: products.filter(product => {
                        if(product.brandId == 1){
                            return product
                        }
                    }).length,
                    adidas: products.filter(product => {
                        if(product.brandId == 2){
                            return product
                        }
                    }).length,
                    topper: products.filter(product => {
                        if(product.brandId == 3){
                            return product
                        }
                    }).length,
                    puma: products.filter(product => {
                        if(product.brandId == 4){
                            return product
                        }
                    }).length,
                    fila: products.filter(product => {
                        if(product.brandId == 5){
                            return product
                        }
                    }).length,
                    kappa: products.filter(product => {
                        if(product.brandId == 6){
                            return product
                        }
                    }).length
                },
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