const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/productsController");

router.get ("/producto", controller.product);
router.get ("/cart", controller.cart)
router.get ("/productoList", controller.productList)
router.get ("/productoCreate", controller.productCreationForm)
router.get ("/productoEdit", controller.formularioedit)

module.exports = router;