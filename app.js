const express = require ("express");
const app = express ();
const path = require ("path");

app.listen (3003, () => console.log ("Servidor corriendo en puerto 3003"));
app.use (express.static (path.resolve (__dirname, "./public")))

app.set("view engine", "ejs")


const mainRoutes = require ("./src/routes/main")
app.use ("/", mainRoutes)


const userRoutes = require ("./src/routes/users")
app.use ("/user", userRoutes)


const productsRoutes = require ("./src/routes/products")
app.use ("/", productsRoutes)