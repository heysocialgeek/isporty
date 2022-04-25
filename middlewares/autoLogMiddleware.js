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


const db = require("../src/database/models")
const userDB = db.User

function autoLogMiddleware(req, res, next) {
    let emailInCookie = req.cookies.userEmail
    console.log("holaaaaaaaaaa", emailInCookie)
    if (emailInCookie != undefined) {
        userDB.findOne({
            where: {
                email: emailInCookie
            }
        })
            .then(userFromCookie => {
                req.session.userLogged = userFromCookie
                next();

            })
        }else {
            next();
        }

    }


module.exports = autoLogMiddleware