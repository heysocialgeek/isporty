const express = require ("express");
const router = express.Router();

//Requerimos el controller//
const controller = require ("../controllers/mainController")

router.get ("/", controller.main);

module.exports = router