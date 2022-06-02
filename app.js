const express = require('express');
let app = express(); 
const path = require('path');
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));


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

//REGISTER
const registerPath = path.join(__dirname, "/views/register.html")
app.get("/register",(req, res)=>{
res.sendFile(registerPath);
})
