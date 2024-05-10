const path = require('path');
const db = require('../../database/models');
const artistaService = require('../../services/artistaService')

const artistasAPIController = {
    list: async function(req, res) {
        try {
            let listadoArtist= await artistaService.listArtist()
            return res.send(listadoArtist)
        } catch (error) {
            console.log(error)
        }
        
    },

    create: async function(req, res) {
        try {
            console.log(req.body);
            let newArtist= await artistaService.createArtist(req.body)
            return res.json(newArtist)
        } catch(error) {
            console.log(error)
            res.send('error en controller')
        }

    },
    update: (req,res) => {
        return res.send('Puedes modifcar el nombre del artista en nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/update/id desde la plataforma POSTMAN');
    },
    destroy: (req,res) => {
        return res.send('Puedes eliminar un artista a nuestra base de datos. Para porder utilizar esta API, debes ejecutar la ruta /artistas/delete/id desde la plataforma POSTMAN');
    }
}
module.exports = artistasAPIController;