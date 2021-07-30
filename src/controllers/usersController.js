const path = require('path');
const fs = require('fs');
const usersFilePath = path.join(__dirname, '../database/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

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
        let idUser = req.params.id;
        let usuarioEncontrado;
        for (i=0; i<users.length; i++) {
            if(users[i].id == idUser) {
                usuarioEncontrado = users[i];
            }
        }
        
        res.render('perfil_usuario', {usuario: usuarioEncontrado});
    },

    edit: (req, res) => {
        console.log("Logica Editar usuario, no es necesaria para sprint 4")
    },
    
    editStore: (req, res) => {
        console.log("Logica Editar usuario, no es necesaria para sprint 4")
    },
    
}

module.exports = controller;