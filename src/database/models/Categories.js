module.exports = function (sequelize, dataTypes) {
    let alias = "Category";

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
        tableName: "categories",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }

    let Category = sequelize.define(alias, cols, config);

    Category.associate = function (models) {
        Category.belongsToMany(models.Product, {
            as: "products",
            through: "productCategory",
            foreignKey: "categoryId",
            otherKey: "productId"
        })
    }

    return Category
}