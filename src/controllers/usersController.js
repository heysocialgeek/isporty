const path = require("path");
const fs = require('fs')
const bcryptjs = require('bcryptjs')
const {validationResult} = require("express-validator")


// path al JSON user//
const userJSONpath = path.resolve(__dirname, "../../data/users.json");

// contenido de la Data Base//
const userDB = JSON.parse(fs.readFileSync(userJSONpath, "utf-8"));

//busco por campo del formulario
let findByField = (field, text) => {
    let userFound = userDB.find(oneUser => oneUser[field] === text);
    return userFound
}

const controller = {
    login: (req, res) => {
        const loginPath = path.resolve(__dirname, '../views/users/login');
        return res.render(loginPath)
    },
    processLogin: (req, res) => {
        let userToLogin = findByField("email", req.body.email);

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


            return res.render(path.resolve(__dirname, '../views/users/login'), {
                errors: {
                    email: {
                        msg: "Las credenciales son inválidas"
                    }
                }
            })
        } 
        return res.render(path.resolve(__dirname, '../views/users/login'), {
            errors: {
                email: {
                    msg: "El correo electrónico ingresado no ha sido encontrado"
                }
            }
        })
    },
    profile: (req, res) => {
        res.render(path.resolve(__dirname, '../views/users/profile'), {user: req.session.userLogged})
    },
    register: (req, res) => {
        const registerPath = path.resolve(__dirname, '../views/users/register');
        return res.render(registerPath)
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
            return res.render(path.resolve(__dirname, '../views/users/register'), {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        let userInDB = findByField("email", req.body.email);

        if (userInDB) {
            return res.render(path.resolve(__dirname, '../views/users/register'), {
                errors: {
                    email: {
                        msg: "Este correo electrónico ya se encuentra registrado"
                    }
                },
                oldData: req.body
            });
        }

        const generateID = () => {
            const lastUser = userDB[userDB.length - 1];
            const lastID = lastUser.id;
            //hago este if por si el json estuviera vacío
            if(lastID){
                return lastID + 1;
            }
            return 1
        } 
        userDB.push({
            id: generateID(),
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            image: req.file ? req.file.filename : '',
        });

        fs.writeFileSync(userJSONpath, JSON.stringify(userDB, null, ' '))
        res.redirect('/user/login')
    },
    logout: (req, res) => {
        res.clearCookie("userEmail")
        req.session.destroy();
        return res.redirect("/")
    }
}

module.exports = controller
