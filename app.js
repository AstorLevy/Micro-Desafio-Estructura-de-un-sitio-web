//Requiero y creo las constantes express y path---------------------------------------------------------
const express = require('express');
const path = require('path');

//creo la variable app que ejecuta express--------------------------------------------------------------
let app = express(); 

app.use(express.urlencoded({extended:false}));

//Declaro la ruta de la cual obtendre los recursos estaticos--------------------------------------------
const publicPath = path.join(__dirname,'/public');
app.use(express.static(publicPath));

const port = process.env.PORT || 3000

//Defino la entrada del puerto--------------------------------------------------------------------------
app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
});

//Defino las rutas de HTML------------------------------------------------------------------------------

//HOME
const homePath = path.join(__dirname, "/views/home.html")
app.get("/",(req, res)=>{
res.sendFile(homePath);
})

//LOGIN
const loginPath = path.join(__dirname, "/views/login.html")
app.get("/login",(req, res)=>{
res.sendFile(loginPath);
})