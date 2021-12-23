const path = require ("path");

const controller = {
    login: (req, res) => {
        const loginPath = path.resolve (__dirname, '../views/login.ejs');
        return res.render (loginPath)
    },
    register: (req, res) => {
        const registerPath = path.resolve (__dirname, '../views/register.ejs');
        return res.render (registerPath)
    }
}

module.exports = controller