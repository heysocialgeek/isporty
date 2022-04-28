/*const fs = require('fs')
const path = require("path");
const userJSONpath = path.resolve(__dirname, "../data/users.json");
const userDB = JSON.parse(fs.readFileSync(userJSONpath, "utf-8"));

function autoLogMiddleware (req, res, next) {

    if (req.cookies.userEmail !== undefined) {
        const userToLogin = userDB.find(user => user.email === req.cookies.userEmail);
        delete userToLogin.password;
        req.session.userLogged = userToLogin
    }

    next();
}

module.exports = autoLogMiddleware;*/


//Middleware de recordar usuario

const db = require("../src/database/models")
const userDB = db.User

const autoLogMiddleware = async function (req, res, next) {
    let emailInCookie = req.cookies.userEmail

    if (emailInCookie != undefined) {
        const userToLogin = await userDB.findOne({
            where: {
                email: emailInCookie
            }
        })
        req.session.userLogged = userToLogin
    }
    next();

}


module.exports = autoLogMiddleware