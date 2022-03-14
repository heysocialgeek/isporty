const path = require('path');
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.resolve(__dirname, '../public/img/products/'));
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '_img' + path.extname(file.originalname));
	}
});

const upload = multer({ storage: multerDiskStorage });

module.exports = upload