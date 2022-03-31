const { body } = require("express-validator");

module.exports = [
    body("name")
        .notEmpty().withMessage("Tienes que escribir un nombre").bail()
        .isLength({ min: 5 }).withMessage("El nombre debe contener al menos 5 caracteres"),
    body("price")
        ,
    body("productGender")
        ,
    body("productBrand")
        ,
    body("productSize")
        ,
    body("productColor")
        ,
    body("productCategory")
        ,
    body("description")
        .isLength({min: 20}.withMessage("El nombre debe contener al menos 20 caracteres"))
]