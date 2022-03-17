const path = require("path")
const { body } = require("express-validator")

module.exports = [
    body("name")
        .notEmpty().withMessage("Tienes que escribir un nombre").bail()
        .isLength({ min: 3, max: 14 }).withMessage("El nombre debe contener entre 3 y 14 caracteres").bail()
        .isAlpha("es-ES", {ignore: ' '}).withMessage("Debes escribir solamente letras"),
    body("email")
        .notEmpty().withMessage("Tienes que escribir un correo electrónico").bail()
        .isEmail().withMessage("Debes escribir un formato de correo válido"),
    body("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({min: 6}).withMessage("La contraseña debe contener al menos 6 caracteres"),
        // .isStrongPassword().withMessage(""),
    body("image").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
        if (!file) {
            throw new Error("Tienes que subir una imagen")
        } else {
            let fileExtensions = path.extname(file.originalname)
            if (!acceptedExtensions.includes(fileExtensions)) {
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(", ")}`)
            }
        }
        return true;
    })
]