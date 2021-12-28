const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/productsController");

router.get ("/producto", controller.product);
router.get ("/cart", controller.cart)
router.get ("/productList", controller.productList)

module.exports = router;