const express = require ("express");
const router = express.Router();
const userControllerdb = require("../../controllers/controllersdb/userControllerdb")

//multerUser
const uploadFile = require("../../../middlewares/multerUserMiddleware")

//Middlewares que no me permite volver al login, register o profile
const guestMiddleware = require("../../../middlewares/guestMiddleware")
const authMiddleware = require("../../../middlewares/authMiddleware")

//middleware de validaciones del register
const validations = require("../../../middlewares/validationsRegister")

//Rutas de registración de un usuario
router.get("/register", guestMiddleware, userControllerdb.register);
router.post("/register",uploadFile.single("avatar"), validations, userControllerdb.processRegister);

//Rutas del login
router.get("/login", guestMiddleware, userControllerdb.login);
router.post("/login", userControllerdb.processLogin);

//Ruta de perfil de usuario
router.get("/profile", authMiddleware, userControllerdb.profile);


//logOut para eliminar todo lo de session
router.get("/logout", userControllerdb.logout);

module.exports = router;

