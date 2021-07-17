
let controller = {
    login: (req, res)=>{
        res.render('login');
    },
    register: (req, res)=>{
        res.render('registro');
    },
    perfilUsuario: (req, res) => {
        res.render('perfil_usuario');
    }
}

module.exports = controller;