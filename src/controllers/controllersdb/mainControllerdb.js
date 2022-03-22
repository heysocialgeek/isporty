const db = require ("../../database/models");

const mainControllerdb = {
    index: (req,res) =>{
        return res.render("index")
    }

}
 
module.exports= mainControllerdb