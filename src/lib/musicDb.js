/**
 * Writing to and getting data from the music database
 */

import knexMusic from '../../db/knexMusic.js';

export default class MusicDb {

    /**
     * add music to the database
     * 
     * @param {*} description 
     * @returns 
     */

    async add(description) {
        try {

            const music = knexMusic('music').insert({
                description: description
            });

            // ik geef de nieuwe muziek terug
            return music;

        } catch(e) {
            console.log(e);
        }
    }

    async update(){

    }

    async delete(){

    }

    /**
     *  Get all music from db table music
     */
    async get() {
        try {
            const allMusic = await knexMusic('music').select('*');
            return allMusic;
        } catch(e) {
            //show an error in the console
            console.log(e.message)
        }
    }

}