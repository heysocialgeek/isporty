const express = require ("express");
const app = express ();
const path = require ("path");

app.listen (3003, () => console.log ("Servidor corriendo en puerto 3003"));
app.use (express.static (path.resolve (__dirname, "./public")))

//rutas main//
const mainControllers = require ("./src/routes/main")
app.use ("/", mainControllers)

//no se a que rutas agregar el carrito//
app.get('/cart', (req,res)=>{
        res.sendFile(path.resolve (__dirname,'src/views/cart.html'))})

//rutas users//

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'src/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve (__dirname, 'src/views/register.html'))
})

//rutas products//

app.get('/producto', (req, res) => {
    res.sendFile(path.resolve (__dirname, 'src/views/producto.html'))
})