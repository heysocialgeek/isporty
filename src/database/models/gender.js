module.exports = function (sequelize, dataTypes) {
    let alias = "Gender";

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
        tableName: "gender",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }

    let Gender = sequelize.define(alias, cols, config);

    Gender.associate = function (models) {
        Gender.hasMany(models.Product, {
            as: "products",
            foreignKey: "genderId"
        })
    }

    return Gender
}