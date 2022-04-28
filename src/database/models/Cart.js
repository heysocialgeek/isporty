module.exports = function (sequelize, DataTypes) {
    let alias = "Cart";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER
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
        Cart.belongsTo(models.User, {
            as: "users",
            foreignKey: "userId"
        })
    }

    return Cart
}