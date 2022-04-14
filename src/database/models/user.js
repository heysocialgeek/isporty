module.exports = function (sequelize, DataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING  
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.STRING
        },
        cartId: {
            type: DataTypes.INTEGER
        }
    }

    let config = {
        paranoid: true,
        tableName: "users",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt',
        deletedAt: 'deletedAt'
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.hasMany(models.Product, {
            as: "products",
            foreignKey: "userId"
        }),
        User.belongsTo(models.Cart, {
            as: "carts",
            foreignKey: "cartId"
        })
    }

    return User
}