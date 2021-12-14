const express = require ("express");
const app = express ();
const path = require ("path");

app.listen (3003, () => console.log ("Servidor corriendo en puerto 3003"));
app.use (express.static (path.resolve (__dirname, "./public")))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'views/index.html'))})

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'views/login.html'))})

app.get('/cart', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'views/cart.html'))})

app.get('/cartprueba', (req,res)=>{
    res.sendFile(path.resolve (__dirname,'views/cartprueba.html'))})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve (__dirname, 'views/register.html'))
})

app.get('/producto', (req, res) => {
    res.sendFile(path.resolve (__dirname, 'views/producto.html'))
})