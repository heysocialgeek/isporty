const express = require ("express");
const router = express.Router();
const productControllerdb = require("../../controllers/controllersdb/productControllerdb")
//multerProduct
const upload = require("../../../middlewares/multerProductMiddleware")

//middleware de creacion de productos
const validations = require("../../../middlewares/validationsProductForm")
const validationEdit = require("../../../middlewares/validationEditForm")

//middleware para evitar ir a create sin estar logeado
const authMiddleware = require("../../../middlewares/authMiddleware")

//Mostrar todos los productos
router.get("/list", productControllerdb.list);

//Mostrar productos por marca
router.get("/listbybrand/:id", productControllerdb.listByBrand);

//Mostrar productos por género
router.get("/listbygender/:id", productControllerdb.listByGender)

//Buscar un producto
router.post("/search", productControllerdb.search);

//Creación de productos
router.get("/create", authMiddleware, productControllerdb.create);
router.post("/create", upload.single('image'), validations, productControllerdb.store);

//Detalle de producto 
router.get("/detail/:id", productControllerdb.detail);

//Editar un producto
router.get("/edit/:id",authMiddleware, productControllerdb.editForm);
router.put("/edit/:id", validationEdit, productControllerdb.edit);

//Borrar un producto
router.delete("/delete/:id", productControllerdb.delete);

module.exports = router;