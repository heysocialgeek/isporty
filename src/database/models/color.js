module.exports = function (sequelize, dataTypes) {
    let alias = "Color";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "colors",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }

    let Color = sequelize.define(alias, cols, config);

    Color.associate = function (models) {
        Color.belongsToMany(models.Product, {
            as: "products",
            through: "productColor",
            foreignKey: "colorId",
            otherKey: "productId"
        })
    }

    return Color
}