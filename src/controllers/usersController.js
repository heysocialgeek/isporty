const path = require ("path");

const controller = {
    login: (req, res) => {
        const loginPath = path.resolve (__dirname, '../views/login');
        return res.render (loginPath)
    },
    register: (req, res) => {
        const registerPath = path.resolve (__dirname, '../views/register');
        return res.render (registerPath)
    }
}

module.exports = controller