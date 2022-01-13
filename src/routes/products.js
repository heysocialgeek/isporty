const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/productsController");

//product get y post//
router.get ("/producto", controller.product);
router.post ("/producto", controller.store)

router.get ("/cart", controller.cart)
router.get ("/productoList", controller.productList)
router.get ("/productoCreate", controller.productCreationForm)
router.get ("/productoEdit", controller.formularioedit)

module.exports = router;