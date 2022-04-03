const { request, response } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = "No Name", apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - UsuariosGet',
        q,
        nombre,
        apikey,
        page,
        limit,
    });
};

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - UsuariosPost',
        nombre,
        edad,
    });
};

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - UsuariosPut',
        id
    });
};

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - Patch',
    });
};

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - UsuariosDelete',
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}