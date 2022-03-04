module.exports = function (sequelize, dataTypes) {
    let alias = "Brand";

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
        tableName = "brands",
        timestamps = true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    let Brand = sequelize.define(alias, cols, config);

    Brand.associate = function (models) {
        Brand.hasMany(models.Product, {
            as: "products",
            foreignKey: "brandId"
        })
    }

    return Brand
}