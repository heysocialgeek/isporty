const fs = require("fs")
const path = require ("path");

const productJSONpath = path.resolve(__dirname, "../../data/products.json");
const productsDB = JSON.parse(fs.readFileSync(productJSONpath, "utf-8"));

const controller = {
    main: (req, res) => {
        const mainPath = path.resolve (__dirname, '../views/index.ejs');
        return res.render(mainPath, { productsDB })
    }
}

module.exports = controller