/**
 * Writing to and getting data from the music database
 */

 import knexMusic from '../../db/knexMusic.js';
 import { v4 as uuidv4 } from 'uuid';
 
export default class playlistDb {
 
/**
* Add music to the database
*/
    async add(title, user, list) {
     try {
        const playlist = await knexMusic('playlist').insert({
        id: uuidv4(),
        title: title,
        user: user,
        createdAt: Date.now(), 
        modifiedAt: Date.now(),
        list: JSON.stringify(list)
       });
       return playlist;
     } catch(e) {
       console.error(e);
     }
    }
 
 /**
  *  Update all songs from db table music
  */
 
  async update(id, playlist) {
   try {
     const updatedPlaylist = await knexMusic('playlist').where("id", id).update({ 
       title: playlist.title, 
       user: playlist.user, 
       list: playlist.list 
     });
      return updatedPlaylist;
   } catch(e) {
     console.error(e.message);
   }
 }
 
 
 /**
  *  Delete all songs from db table music
  */
   async delete(id){
     try {
       return await knexMusic('playlist').where('id', id).del();
     } catch(e) {
       console.error(e);
     }
   }
 
 /**
  *  Get all songs from db table music
  */
   async get() {
     try {
       return await knexMusic('playlist').select("*");
     } catch(e) {
       console.error(e.message);
     }
   }
}