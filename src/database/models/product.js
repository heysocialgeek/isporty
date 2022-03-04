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
            type: dataTypes.DECIMAL
        },
        image: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        brandId: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        paranoid: true,
        tableName = "products",
        timestamps = true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "brandId"
        }),
        Product.hasMany(models.Size, {
            as: "sizes",
            foreignKey: "sizeId"
        }),
        Product.belongsTo(models.Gender, {
            as: "gender",
            foreignKey: "genderId"
        }),
        Product.hasMany(models.Cart, {
            as: "carts",
            foreignKey: "cartId"
        }),
        Product.hasMany(models.Category, {
            as: "categories",
            foreignKey: "categoryId"
        })
    }

    return Product
}