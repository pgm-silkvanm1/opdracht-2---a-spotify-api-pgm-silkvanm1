/**
 * Writing to and getting data from the music database
 */

import knexMusic from '../../db/knexMusic.js';
import { v4 as uuidv4 } from 'uuid';

export default class SongsDb {

/**
 * Add music to the database
 */
  async add(title, artist, uri) {
    try {
      const song = await knexMusic('songs').insert({
        id: uuidv4(),
        title: title,
        artist: artist, 
        uri: uri,
        createdAt: Date.now()
      });
      return song;
    } catch(e) {
      console.error(e);
    }
  }

/**
 *  Update all songs from db table music
 */

 async update(id, song) {
  try {
    const updatedSong = await knexMusic('songs').where("id", id).update({ 
      title: song.title, 
      artist: song.title, 
      uri: song.uri 
    });
     return updatedSong;
  } catch(e) {
    console.error(e.message);
  }
}


/**
 *  Delete all songs from db table music
 */
  async delete(id){
    try {
      return await knexMusic('songs').where('id', id).del();
    } catch(e) {
      console.error(e);
    }
  }

/**
 *  Get all songs from db table music
 */
  async get() {
    try {
      return await knexMusic('songs').select("*");
    } catch(e) {
      console.error(e.message);
    }
  }
}