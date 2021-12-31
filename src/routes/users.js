const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/usersController")

router.get ("/login", controller.login)
router.get ("/register", controller.register)
router.get ("/formularioDeCreacion", controller.formularioDeCreacion)

module.exports = router