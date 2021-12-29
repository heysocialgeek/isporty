const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/productsController");

router.get ("/producto", controller.product);
router.get ("/cart", controller.cart)
router.get ("/productList", controller.productList)
router.get ("/product-creation-form", controller.productCreationForm)

module.exports = router;