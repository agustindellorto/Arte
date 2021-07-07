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

app.get('/about', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/about.html'));
});

app.get('/galeria', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/galeria.html'));
});

app.get('/contact', (req,res) =>{
    res.sendFile(path.join(__dirname, './views/contact.html'));
});


app.use(express.static(path.join(__dirname, './public')));

app.use(express.static(path.join(__dirname, './views')));  

app.listen(3000, () => {
console.log("Servidor corriendo");
});
