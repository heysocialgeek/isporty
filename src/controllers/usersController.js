const path = require("path");
const fs = require('fs')
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
            return lastID + 1;
        } 
        userDB.push({
            id: generateID(),
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            documento: req.body.documento,
            FechaDeNacimiento: req.body.birthday_date,
            calle: req.body.calle,
            numeroCalle: req.body.numeroCalle,
            pisoDepartamento: req.body.piso,
            codigoPostal: req.body.codigoPostal,
            infoAdicional: req.body.infoAdicional,
            image: req.file ? req.file.filename : '',

        });

        fs.writeFileSync(userJSONpath, JSON.stringify(userDB, null, ' '))
        res.redirect('/')
    }
}

module.exports = controller
