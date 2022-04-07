const db = require("../../database/models");
const bcryptjs = require('bcryptjs')
const {validationResult} = require("express-validator");

const userControllerdb = {
    register: (req, res) => {
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
    processLogin: async (req, res) => {
        let userToLogin = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });

        if(userToLogin) {
            let passwordCorrect = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if (passwordCorrect){
                //delete userToLogin.password //por seguridad de que nadie vea el password
                req.session.userLogged = userToLogin;

                if (req.body.recordar_usuario){
                    res.cookie("userEmail", userToLogin.email, { maxAge: (1000 * 60) * 10 });
                }

                return res.redirect("/user/profile")
            }


            return res.render("users/login", {
                errors: {
                    email: {
                        msg: "Las credenciales son inválidas"
                    }
                }
            })
        }

        return res.render("users/login", {
            errors: {
                email: {
                    msg: "El correo electrónico ingresado no ha sido encontrado"
                }
            }
        })
    },
    profile: async (req, res) => {
        // const user = await db.User.findByPk(req.params.id);
        res.render("users/profile", {user: req.session.userLogged})
    },
    logout: (req, res) => {
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect("/")
    }
}

module.exports = userControllerdb