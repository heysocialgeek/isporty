module.exports = function (sequelize, dataTypes) {
    let alias = "Size";

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
        // tableName:"sizes",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }

    let Size = sequelize.define(alias, cols, config);

    Size.associate = function (models) {
        Size.belongsToMany(models.Product, {
            as: "products",
            through: "productSize",
            foreignKey: "sizeId",
            otherKey: "productId"
        })
    }

    return Size
}