module.exports = function (sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING  
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        cartId: {
            type: dataTypes.INTEGER
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
        User.belongsTo(models.Cart, {
            as: "carts",
            foreignKey: "cartId"
        })
    }

    return User
}