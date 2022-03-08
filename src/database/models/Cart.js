module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        userId: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "carts",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = function (models) {
        Cart.belongsToMany(models.Product, {
            as: "products",
            through: "productCart",
            foreignKey: "cartId",
            otherKey: "productId"
        }),
        Cart.hasMany(models.User, {
            as: "users",
            foreignKey: "cartId"
        })
    }

    return Cart
}