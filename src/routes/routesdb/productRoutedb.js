const express = require ("express");
const router = express.Router();
const productControllerdb = require("../../controllers/controllersdb/productControllerdb")

//Mostrar todos los productos
router.get("/list", productControllerdb.list)
//Creación de productos
router.get("/create", productControllerdb.create)
router.post("/create", productControllerdb.store)

module.exports = router;