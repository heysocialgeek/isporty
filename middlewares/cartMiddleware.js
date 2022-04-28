function cartMiddleware(req, res, next) {
    req.session.cartCreated = false
    if (req.session.cartId != undefined) {
        req.session.cartCreated = true
    }
    next();
}
module.exports = cartMiddleware;