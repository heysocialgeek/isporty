// Middleware para editar y eliminar producto propio

function editAndDeleteOwnProduct (req, res, next) {
	res.locals.userLogged = null;

	if (req.session.userLogged !== undefined) {
		res.locals.userLogged = req.session.userLogged;
	}

    next();
}

module.exports = editAndDeleteOwnProduct