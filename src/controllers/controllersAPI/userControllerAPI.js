const db = require("../../database/models");

const controllerUser = {
    showUsers: (req, res) => {
        db.User.findAll({})
        .then(users => {
            // delete users.password;
            return res.status(200).json({
                total: users.length,
                users: users.map(user => { 
                    delete user.dataValues.password
                    delete user.dataValues.image
                    delete user.dataValues.cartId
                    delete user.dataValues.createdAt
                    delete user.dataValues.updatedAt
                    delete user.dataValues.deletedAt
                    return user}),
                status: 200
            })
        })
    },
    detailUsers: (req, res) => {
        db.User.findByPk(req.params.id)
        .then(user => {
            delete user.dataValues.password
            delete user.dataValues.image
            return res.status(200).json({
                data: user,
                URL: `http://localhost:3003/img/users/${user.image}`
            })
        })
    }
}

module.exports = controllerUser