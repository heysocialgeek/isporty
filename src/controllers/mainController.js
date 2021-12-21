const path = require ("path");

const controller = {
    main: (req, res) => {
        const mainPath = path.resolve (__dirname, '../views/index.html');
        return res.sendFile (mainPath)
    }
}

module.exports = controller