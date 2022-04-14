module.exports = function (sequelize, DataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING  
        },
        price: {
            type: DataTypes.NUMBER
        },
        image: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        brandId: {
            type: DataTypes.INTEGER
        },
        genderId: {
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER
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
        Product.belongsTo(models.User, {
            as: "users",
            foreignKey: "userId"
        }),
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