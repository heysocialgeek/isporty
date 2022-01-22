const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/productsController");

//detalle de un producto en particular//
router.get ("/detail", controller.detail);


router.get ("/cart", controller.cart)

//listado de productos//
router.get ("/productList", controller.productList)

//formulario de creacion de productos//
router.get ("/productCreate", controller.productCreationForm)

//acción de creación de un producto//
router.post ("/productCreate", controller.store)

//formulario de edición de un producto//
router.get ("/productEdit", controller.formularioedit)

//acción de edición de un producto//


//acción de borrar un producto//

module.exports = router;