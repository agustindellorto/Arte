const express = require('express');
const path = require('path');

const app = express();

const rutasMain = require('./routes/main');
const rutasProductos = require('./routes/productos');
const rutasUsuarios = require('./routes/usuarios');
const rutasCarrito = require('./routes/carrito');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());




app.use('/', rutasMain);

app.use('/galeria', rutasProductos);

app.use('/carrito', rutasCarrito);

app.use('/user', rutasUsuarios);  



app.listen(process.env.PORT || 3000, () => {
console.log("Servidor corriendo");
});
