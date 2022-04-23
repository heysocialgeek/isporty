const db = require("../../database/models");

const controllerProduct = {
    showProducts: (req, res) => {
        db.Product.findAll()
        .then(async products => {
            const brands = await db.Brand.findAll({include: ["products"]});

            let productsByBrand = {};
            let brandById = {};

            for (let i = 0; i < brands.length; i++) {
                productsByBrand[brands[i].name] = brands[i].products.length;
                brandById[brands[i].id] = brands[i].dataValues.name;
            }

            return res.status(200).json({
                total: products.length,
                countByBrand: {...productsByBrand},
                data: { 
                    product: products.map(product => {
                        delete product.dataValues.createdAt
                        delete product.dataValues.updatedAt
                        delete product.dataValues.deletedAt
                        // delete product.dataValues.price
                        product.dataValues.image = `http://localhost:3003/img/products/${product.image}`
                        delete product.dataValues.genderId
                        delete product.dataValues.userId
                        product.dataValues.brands = brandById[product.dataValues.brandId]//pasar el valor a STRING() si no funciona
                        delete product.dataValues.brandId
                        product.dataValues.detail = `http://localhost:3003/api/products/${product.id}`
                    return product}),
                }
            })
        })
    },
    
    detailProducts: (req, res) => {
        
        db.Product.findByPk(req.params.id, {include:["sizes", "colors", "categories", "gender"]})
            .then( async product => {
                const brands = await db.Brand.findAll({include: ["products"]});
                let brandById = {};
                for (let i = 0; i < brands.length; i++) {
                    brandById[brands[i].id] = brands[i].dataValues.name;
                }
                return res.status(200).json({
                    data: {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        gender: product.gender.name,
                        brands: brandById[product.dataValues.brandId]
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