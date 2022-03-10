const express = require ("express");
const router = express.Router();
const productControllerdb = require("../../controllers/controllersdb/productControllerdb")
//multerProduct
const upload = require("../../../middlewares/multerProductMiddleware")

//Mostrar todos los productos
router.get("/list", productControllerdb.list)
//Creación de productos
router.get("/create", productControllerdb.create)
router.post("/create", upload.single('image'), productControllerdb.store)

module.exports = router;