const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize

let artistaService = {

    listArtist: async function (){
        try {
            const artists = await db.Artista.findAll()
            return artists
        } catch (error) {
            console.log(error);
            return('no hay actores')
        }
    },

    createArtist: async function (body){
        try {
            console.log(body.nombre);
        let newArtist = await db.Artista.create({
            nombre:body.nombre, 
            created_at: Date.now(),
            updated_at:Date.now()
        })
        return newArtist

        } catch (error) {
        console.log(error);
        return ('no creaste nada!!!!')
        } 
    }
}

module.exports = artistaService;