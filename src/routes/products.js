const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/productsController");

//detalle de un producto en particular//
router.get ("/producto", controller.product);


router.get ("/cart", controller.cart)

//listado de productos//
router.get ("/productoList", controller.productList)

//formulario de creacion de productos//
router.get ("/productoCreate", controller.productCreationForm)

//acción de creación de un producto//
router.post ("/", controller.store)

//formulario de edición de un producto//
router.get ("/productoEdit", controller.formularioedit)

//acción de edición de un producto//


//acción de borrar un producto//

module.exports = router;