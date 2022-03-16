const db = require("../../database/models");
const bcryptjs = require('bcryptjs')
const {validationResult} = require("express-validator");

//busco por campo del formulario
    // let findByField = async (field, text) => {
    //     let allUsers = await db.User.findAll({});
    //     let userFound = await allUsers.find(oneUser[field] === text)
    //     return userFound
    // }

const userControllerdb = {
    register: (req, res) => {
        // let allUsers = await db.User.findAll({});
        res.render("users/register")
    },
    processRegister: async (req, res) => {
        var resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render("users/register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        // let userInDB = findByField("email", req.body.email);
        let isUserInDB = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (isUserInDB) {
            return res.render("users/register", {
                errors: {
                    email: {
                        msg: "Este correo electrónico ya se encuentra registrado"
                    }
                },
                oldData: req.body
            });
        }
        
        const userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file ? req.file.filename : ""
        }
        try {
            await db.User.create(userToCreate)
            res.redirect('/user/login')
        } catch (error) {
            console.log(error)
        }
        
        // const userCreated = await db.User.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: bcryptjs.hashSync(req.body.password, 10),
        //     image: req.file ? req.file.filename : ""
        // });
    },
    login: (req, res) => {
        res.render("users/login")
    },
    processLogin: (req, res) => {

    },
    profile: (req, res) => {

    },
    logout: (req, res) => {

    }
}

module.exports = userControllerdb