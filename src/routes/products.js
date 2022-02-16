const express = require ("express");
const router = express.Router();
const controller = require ("../controllers/productsController");

//multerProduct
const upload = require("../../middlewares/multerProductMiddleware")

//listado de productos//
router.get ("/productList", controller.productList)

//detalle de un producto en particular//
router.get ("/detail/:id", controller.detail);

router.get ("/cart", controller.cart)

//formulario de creacion de productos//
router.get ("/create", controller.productCreationForm)

//acción de creación de un producto//
router.post ("/", upload.single('imagen'), controller.create)

//formulario de edición de un producto//
router.get("/productEdit/:id", controller.formularioedit)

//acción de edición de un producto//
router.put('/:id', controller.editproduct)

//acción de borrar un producto//
router.delete('/detail/:id', controller.delete); 

module.exports = router;