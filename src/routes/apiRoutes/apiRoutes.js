const express = require ("express");
const router = express.Router();

const controllerUser = require ("../../controllers/controllersAPI/userControllerAPI");
const controllerProduct = require ("../../controllers/controllersAPI/productControllerAPI");

//Rutas de APIs de Usuario
router.get("/users", controllerUser.showUsers);
router.get("/users/:id", controllerUser.detailUsers);

//Rutas de APIs de productos
router.get("/products", controllerProduct.showProducts);
// router.get("/products/:id", controllerProduct.detailProducts);


module.exports = router;