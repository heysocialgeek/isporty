const express = require ("express");
const app = express ();
const path = require ("path");

app.listen (3003, () => console.log ("Servidor corriendo en puerto 3003"));
app.use (express.static (path.resolve (__dirname, "./public")))

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'views/login.html'))})