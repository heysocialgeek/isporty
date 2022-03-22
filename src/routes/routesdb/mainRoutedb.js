const express= require ("express");
const router = express.Router();

const mainControllerdb= require ("../../controllers/controllersdb/mainControllerdb");

router.get ("/", mainControllerdb.index);

module.exports= router
