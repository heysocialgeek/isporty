function accessOfUsers (req, res, next) {
    res.locals.isLogged = false;

    if(req.session && req.session.userLogged == Product.userId){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged
    }

    next()
}