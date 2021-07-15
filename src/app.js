const express = require('express');
const path = require('path');

const app = express();

const routes = require('./routes/routes')

app.set('view engine', 'ejs')

app.use('/', routes)

app.use('/detalle_producto', routes)

app.use('/carrito', routes)

app.use('/login', routes)

app.use('/registro', routes)

app.use('/about', routes)

app.use('/galeria', routes)

app.use('/contact', routes)

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.static(path.join(__dirname, './views')));  

app.listen(process.env.PORT || 3000, () => {
console.log("Servidor corriendo");
});
