const path = require ("path");

const controller = {
    login: (req, res) => {
        const loginPath = path.resolve (__dirname, '../views/login.html');
        return res.sendFile (loginPath)
    },
    register: (req, res) => {
        const registerPath = path.resolve (__dirname, '../views/register.html');
        return res.sendFile (registerPath)
    }
}

module.exports = controller