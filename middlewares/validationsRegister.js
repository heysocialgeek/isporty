const path = require("path");
const { body } = require("express-validator");

module.exports = [
    body("name")
        .notEmpty().withMessage("Tienes que escribir un nombre").bail()
        .isLength({ min: 3 }).withMessage("El nombre debe contener al menos 3 caracteres").bail()
        .isAlpha("es-ES", {ignore: ' '}).withMessage("Debes escribir solamente letras"),
    body("email")
        .notEmpty().withMessage("Tienes que escribir un correo electrónico").bail()
        .isEmail().withMessage("Debes escribir un formato de correo válido"),
    body("password")
        .notEmpty().withMessage("Tienes que escribir una contraseña").bail()
        .isLength({min: 8}).withMessage("La contraseña debe contener al menos 8 caracteres").bail()
        .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}).withMessage("La contraseña debe contener al menos 8 caracteres, 1 mayúscula, 1 número y 1 un símbolo"),
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