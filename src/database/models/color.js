module.exports = function (sequelize, DataTypes) {
    let alias = "Color";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
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