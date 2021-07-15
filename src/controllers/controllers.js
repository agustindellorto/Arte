let controller ={
    index: (req, res)=>{
        res.render('index')
    },
    login: (req, res)=>{
        res.render('login')
    },
    registro: (req, res)=>{
        res.render('registro')
    },
    galeria: (req, res)=>{
        res.render('galeria')
    },
    detalleProducto: (req, res)=>{
        res.render('detalle_producto')
    },
    contact: (req, res)=>{
        res.render('contact')
    },
    carrito: (req, res)=>{
        res.render('carrito')
    },
    about: (req, res)=>{
        res.render('about')
    },
}

module.exports= controller