module.exports = function (sequelize, DataTypes) {
    let alias = "Gender";

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
        tableName: "gender",
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
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