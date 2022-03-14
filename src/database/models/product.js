module.exports = function (sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING  
        },
        price: {
            type: dataTypes.NUMBER
        },
        image: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        brandId: {
            type: dataTypes.INTEGER
        },
        genderId: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        paranoid: true,
        tableName: "products",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "brandId"
        }),
        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "productSize",
            foreignKey: "productId",
            otherKey: "sizeId"
        }),
        Product.belongsTo(models.Gender, {
            as: "gender",
            foreignKey: "genderId"
        }),
        Product.belongsToMany(models.Cart, {
            as: "carts",
            through: "productCart",
            foreignKey: "productId",
            otherKey: "cartId"
        }),
        Product.belongsToMany(models.Category, {
            as: "categories",
            through: "productCategory",
            foreignKey: "productId",
            otherKey: "categoryId"
        }),
        Product.belongsToMany(models.Color, {
            as: "colors",
            through: "productColor",
            foreignKey: "productId",
            otherKey: "colorId"
        })
    }

    return Product
}