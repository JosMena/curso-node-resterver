const Role = require('../models/role');
const Usuario = require('../models/usuario');

// Verificar si el rol es válido
const esRolValido = async( rol = '' ) => {

    const existeRol = await Role.findOne({ rol });
    if( !existeRol ){
        throw new Error(`El rol ${ rol } no está registrado en la base de datos`);
    }
}

// Verificar si correo existe
const emailExiste = async( correo = '' ) => {
    
    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ){
        throw new Error(`El email ${ correo } ya está registrado en la base de datos`);
    }
}

// Verificar si correo existe
const existeUsuarioID = async( id ) => {
    
    const existeUsuario = await Usuario.findById(id);
    if( !existeUsuario ){
        throw new Error(`El id ${ id } no está registrado en la base de datos`);
    }
}


module.exports = {
    esRolValido,
    emailExiste,
    existeUsuarioID,
}