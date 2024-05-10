const path = require('path');
const db = require('../../database/models');
const albumesService = require ('../../services/albumesService')

const albumesAPIController = {
    list: async function (req, res) {
        try {
            let listadoAlbum= await albumesService.listAlbums()
            return res.send(listadoAlbum)
        } catch (error) {
            console.log(error)
        }
    },

    'detail': (req, res) => {
        return res.send('Devuelve el detalle de un album asociado a un (" id ") de un artista indicado en la ruta o en la query string.');
    }
}

module.exports = albumesAPIController;