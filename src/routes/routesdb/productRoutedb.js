const express = require ("express");
const router = express.Router();
const productControllerdb = require("../../controllers/controllersdb/productControllerdb")

//Creación de productos
router.get("/create", productControllerdb.create)

module.exports = router;