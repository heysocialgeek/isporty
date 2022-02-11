const express = require("express");
const router = express.Router();
const path = require("path")
const multer = require("multer")
const { body } = require("express-validator")
const guestMiddleware = require("../../middlewares/guestMiddleware")//requiero el middleware que no me permite volver al logij y register
const authMiddleware = require("../../middlewares/authMiddleware")


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, "../../public/img/users/") )
    },
    filename: (req, file, cb) => {
        let fileName = Date.now() + "_img" + path.extname(file.originalname)
        cb(null, fileName )
    } 
})

const uploadFile = multer({ storage })

const controller = require ("../controllers/usersController")

const validations = [
    body("first_name").notEmpty().withMessage("Tienes que escribir un nombre"),
    body("last_name").notEmpty().withMessage("Tienes que escribir un apellido"),
    body("email")
         .notEmpty().withMessage("Tienes que escribir un correo electrónico").bail()
         .isEmail().withMessage("Debes escribir un formato de correo válido"),
    body("password").notEmpty().withMessage("Tienes que escribir una contraseña"),
    body("documento").notEmpty().withMessage("Tienes que escribir un documento de identidad"),
    body("avatar").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".jpeg", ".gif"];
        if(!file) {
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

router.get ("/login", guestMiddleware, controller.login)
router.post ("/login", controller.processLogin)

router.get("/profile", authMiddleware, controller.profile)

router.get ("/register", guestMiddleware, controller.register)

//Procesa el registro//
router.post("/register",uploadFile.single("avatar"), validations, controller.processRegister)

//logOut para eliminar todo lo de session
router.get("/logout", controller.logout)

module.exports = router;