const express = require("express");
const app = express();
const path = require("path");
const methodOverride =  require('method-override');
const session = require("express-session")
const cookie = require('cookie-parser');
const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");
const editAndDeleteOwnProduct = require("./middlewares/editAndDeleteOwnProduct")

app.listen (3003, () => console.log ("Servidor corriendo en puerto 3003"));
app.use (express.static (path.resolve (__dirname, "./public")))


//utilizo session
app.use(session({
    secret: "key-secret",
    resave: false,
    saveUninitialized: false
}))

//middleware para que no se muestre iniciar sesion y registrarse cuando estas logeado
app.use(userLoggedMiddleware); 

//middleware para que un Usuario edita o borre SU producto
app.use(editAndDeleteOwnProduct);

//requiero el req.body//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(cookie())
// Middlewares de aplicación

const autoLog = require("./middlewares/autoLogMiddleware")
app.use(autoLog);

/******** TEMPLATE EJS ********/
app.set("view engine", "ejs");
app.set("views", "./src/views");

/************* RUTAS CON JSON *************/
// const mainRoutes = require ("./src/routes/main")
// app.use ("/", mainRoutes)

// const userRoutes = require ("./src/routes/users")
// app.use ("/user", userRoutes)

// const productsRoutes = require ("./src/routes/products")
// app.use ("/product", productsRoutes)


/************* RUTAS CON BASE DE DATOS *************/
const productRoutedb = require("./src/routes/routesdb/productRoutedb")
app.use("/products", productRoutedb)

const userRoutedb = require("./src/routes/routesdb/userRoutedb")
app.use("/user", userRoutedb)

//RUTAS DE APIS PARA EL DASHBOARD
const apiRoutes = require ("./src/routes/apiRoutes/apiRoutes");
app.use("/api", apiRoutes)

const mainRoutedb = require ("./src/routes/routesdb/mainRoutedb")
app.use ("/", mainRoutedb)








