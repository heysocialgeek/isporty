const path = require("path");
const fs = require('fs')
const bcryptjs = require ("bcryptjs")
const {validationResult} = require("express-validator")


// path al JSON user//
const userJSONpath = path.resolve(__dirname, "../../data/users.json");

// contenido de la Data Base//
const userDB = JSON.parse(fs.readFileSync(userJSONpath, "utf-8"));

const controller = {
    login: (req, res) => {
        const loginPath = path.resolve(__dirname, '../views/users/login');
        return res.render(loginPath)
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
    }
}

module.exports = controller
