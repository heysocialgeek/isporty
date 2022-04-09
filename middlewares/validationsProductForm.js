const { body } = require("express-validator");

module.exports = [
    body("name")
        .notEmpty().withMessage("Tienes que escribir un nombre").bail()
        .isLength({ min: 3 }).withMessage("El nombre debe contener al menos 3 caracteres"),
    body("price")
        .notEmpty().withMessage("Tienes que escribir un precio").bail()
        .isNumeric().withMessage("Solo debes escribir números"),
    body("productGender")
        .custom((value, { req }) => {
            if (value === "1") {
              throw new Error("Tenés que elegir una marca");
            }
            return true;
        }),
    body("productBrand")
        .custom((value, { req }) => {
        if (value === "1") {
          throw new Error("Tenés que elegir una marca");
        }
        return true;
    }),
    body("productSize")
        .custom((value, { req }) => {
            if (value === undefined) {
              throw new Error("Tenés que elegir al menos una talla");
            }
            return true;
        }),
    body("productColor")
        .custom((value, { req }) => {

            if (value === undefined) {
              throw new Error("Tenés que elegir al menos un color");
            }
            return true;
        }),
    body("productCategory")
        .custom((value, { req }) => {
        
            if (value === undefined) {
              throw new Error("Tenés que elegir al menos una categoría");
            }
            return true;
    }   ),
    body("description")
        .isLength({min: 20}).withMessage("La descripción debe contener al menos 20 caracteres"),
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