const express = require ("express");
const router = express.Router();
const productControllerdb = require("../../controllers/controllersdb/productControllerdb")
//multerProduct
const upload = require("../../../middlewares/multerProductMiddleware")

//Mostrar todos los productos
router.get("/list", productControllerdb.list);

//Buscar un producto
router.post("/search", productControllerdb.search);

//Creación de productos
router.get("/create", productControllerdb.create);
router.post("/create", upload.single('image'), productControllerdb.store);

//detalle de producto
router.get("/detail/:id", productControllerdb.detail);

//Editar un producto
router.get("/edit/:id", productControllerdb.editForm);
router.put("/edit/:id", productControllerdb.edit);

//Borrar un producto
router.delete("/delete/:id", productControllerdb.delete);

module.exports = router;