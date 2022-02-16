const express = require("express");
const router = express.Router();

//middleware de validaciones del register
const validations = require("../../middlewares/validationsRegister")

//multerUser
const uploadFile = require("../../middlewares/multerUserMiddleware")

//Middlewares que no me permite volver al login, register o profile
const guestMiddleware = require("../../middlewares/guestMiddleware")
const authMiddleware = require("../../middlewares/authMiddleware")

const controller = require("../controllers/usersController")

router.get("/login", guestMiddleware, controller.login)
router.post("/login", controller.processLogin)

router.get("/profile", authMiddleware, controller.profile)

router.get("/register", guestMiddleware, controller.register)

//Procesa el registro//
router.post("/register",uploadFile.single("avatar"), validations, controller.processRegister)

//logOut para eliminar todo lo de session
router.get("/logout", controller.logout)

module.exports = router;