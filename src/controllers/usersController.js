
let controller = {
    login: (req, res)=>{
        res.render('login');
    },
    register: (req, res)=>{
        res.render('registro');
    },
    store: (req, res) => {
        console.log("Aca va la logica de crear usuario en el archivoJson");
    },
    perfilUsuario: (req, res) => {
        res.render('perfil_usuario');
    },
    edit: (req, res) => {
        console.log("Logica Editar usuario, no es necesaria para sprint 4")
    },
    
    editStore: (req, res) => {
        console.log("Logica Editar usuario, no es necesaria para sprint 4")
    },
    
}

module.exports = controller;