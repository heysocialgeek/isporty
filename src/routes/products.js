const express = require ("express");
const router = express.Router();

const path = require('path');

const controller = require ("../controllers/productsController");

const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve(__dirname, '../../public/img'));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '_img' + path.extname(file.originalname));
	}
});

const upload = multer({ storage: multerDiskStorage });

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

module.exports = router;