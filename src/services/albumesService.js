const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize

let albumesService = {

    listAlbums: async function (){
        try {
            const albums = await db.Album.findAll({
                include:[
                    {association:'artista'}
                ]
            })
            return albums
        } catch (error) {
            console.log(error);
            return('no hay albumes')
        }
    }
}

module.exports = albumesService;