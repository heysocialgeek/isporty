module.exports = function (sequelize, DataTypes) {
    let alias = "Category";

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