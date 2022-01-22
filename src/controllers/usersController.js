const path = require ("path");
const fs = require ('fs')

//path al JSON user//
const userJSONpath = path.resolve (__dirname, "../../data/users.json");

// contenido de la Data Base//
const userDB = JSON.parse (fs.readFileSync(userJSONpath,"utf-8"));

const controller = {
    login: (req, res) => {
        const loginPath = path.resolve (__dirname, '../views/users/login');
        return res.render (loginPath)
    },
    register: (req, res) => {
        const registerPath = path.resolve (__dirname, '../views/users/register');
        return res.render (registerPath)
    }
}

module.exports = controller