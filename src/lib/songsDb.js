/**
 * Writing to and getting data from the music database
 */

import knexMusic from '../../db/knexMusic.js';
import { v4 as uuidv4 } from 'uuid';
import knex from 'knex';

export default class SongsDb {

/**
 * Add music to the database
 */
  async add(title, artist, uri) {
    try {
      return await knexMusic('songs').insert({
        songid: uuidv4(),
        title: title,
        artist: artist, 
        uri: uri,
        createdAt: Date.now()
      });
    } catch(e) {
        console.error(e);
    }
  }

/**
 *  Update all songs from db table music
 */
  async update(title, artist, uri){
    try {
      return await knexMusic('songs').where('songid', id).update({
        songid: uuidv4(),
        title: title,
        artist:artist, 
        uri: uri,
        createdAt: Date.now()
      })
    } catch(e) {
      console.error(e);
    }
  }

/**
 *  Delete all songs from db table music
 */
  async delete(){
    try {
      return await knexMusic('songs').where('songid', id).del();
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