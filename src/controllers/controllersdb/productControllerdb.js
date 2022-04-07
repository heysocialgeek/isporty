const db = require("../../database/models");
const { Op } = require("sequelize");
const {validationResult} = require("express-validator");

const productControllerdb = {
    list: async (req, res) => {
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        const products = await db.Product.findAll({/*include: ["brands", "categories", "sizes", "gender", "colors"]*/ });
        return res.render("products/list", { genders, brands, sizes, categories, colors, products })
    },
    create: async (req, res) => {
        try {
            const genders = await db.Gender.findAll({});
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            return res.render("products/create", { genders, brands, sizes, categories, colors })
        } catch (error) {
            console.log(error);
        }
    },
    store: async (req, res) => {

        let resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            const genders = await db.Gender.findAll({});
            const brands = await db.Brand.findAll({});
            const sizes = await db.Size.findAll({});
            const categories = await db.Category.findAll({});
            const colors = await db.Color.findAll({});
            return res.render("products/create", {
                errors: resultValidation.mapped(),
                oldData: req.body,
                genders, brands, sizes, categories, colors
            });
        }

        const productStored = await db.Product.create({
            name: req.body.name,
            price: req.body.price,
            image: req.file ? req.file.filename : "",
            description: req.body.description,
            brandId: req.body.productBrand,
            genderId: req.body.productGender
        });
        productStored.addCategories(req.body.productCategory);
        productStored.addSize(req.body.productSize);
        productStored.addColor(req.body.productColor)
        return res.redirect("/products/list")
    },

    detail: async (req, res) => {
        const productID = req.params.id;
        const product = await db.Product.findByPk(productID, { include: ['categories', 'gender', 'brands', 'colors', 'sizes'] })
        return res.render('products/detail', { product })
    },

    editForm: async (req, res) => {
        const productID = req.params.id;
        const product = await db.Product.findByPk(productID, { include: ['categories', 'gender', 'brands', 'colors', 'sizes'] });
        const genders = await db.Gender.findAll({});
        const brands = await db.Brand.findAll({});
        const sizes = await db.Size.findAll({});
        const categories = await db.Category.findAll({});
        const colors = await db.Color.findAll({});
        return res.render("products/edit", { product, genders, brands, sizes, categories, colors })
    },

    edit: async (req, res) => {
        const productToEdit = await db.Product.findByPk(req.params.id, { include: ["sizes", "colors", "categories"] })


        productToEdit.removeSizes(productToEdit.sizes);
        productToEdit.addSizes(req.body.productSize)
        productToEdit.removeColors(productToEdit.colors);
        productToEdit.addColors(req.body.productColor)
        productToEdit.removeCategories(productToEdit.categories);
        productToEdit.addCategories(req.body.productCategory)
        

        productToEdit.name = req.body.name ? req.body.name : productToEdit.name;
        productToEdit.price = req.body.price ? req.body.price : productToEdit.price;
        productToEdit.description = req.body.description;
        productToEdit.brandId = req.body.productBrand;
        productToEdit.genderId = req.body.productGender;
        
        productToEdit.save()
        return res.redirect("/products/list")
    },
    delete: (req, res) => {
        db.Product.destroy({
            where: { id: req.params.id }
        }).then(a =>{
            res.redirect("/products/list")
        })
        
        /*async (req, res) => {
        const productID = req.params.id;
        const productToDelete = await db.Product.findByPk(productID, { include: ["categories", "sizes", "colors"]});
        productToDelete.removeCategories(productToDelete.categories);
        productToDelete.removeSizes(productToDelete.sizes);
        productToDelete.removeColors(productToDelete.colors);
        productToDelete.destroy();
        return res.redirect("/products/list");*/
        },
    

    search: (req, res) => {
        db.Product.findAll({
            where: {
                name: {
                    [Op.like] : '%' + req.body.search + '%'
                }
            },
            include: ['categories', 'sizes', 'colors']
        })
            .then(products => {
                return res.render('products/searchResults', { array: products });
            })
    }

}

module.exports = productControllerdb