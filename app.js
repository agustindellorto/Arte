const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/index.html'));
});

app.get('/detalle_producto', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/detalle_producto.html'));
});

app.get('/carrito', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/carrito.html'));
});

app.get('/login', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/login.html'));
});

app.get('/registro', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/registro.html'));
});

app.get('/carrito', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/carrito.html'));
});

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(path.join(__dirname, './views')));  

app.listen(3000, () => {
console.log("Servidor corriendo");
});
