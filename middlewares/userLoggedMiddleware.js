// Middleware para que no se muestre los logos iniciar sesion y registrarse cuando estas logeado

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    }

    next();
}

module.exports = userLoggedMiddleware