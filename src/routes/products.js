const express = require ("express");
const router = express.Router();

const controller = require ("../controllers/productsController");

router.get ("/", controller.product);
router.get ("/cart", controller.cart)

module.exports = router;