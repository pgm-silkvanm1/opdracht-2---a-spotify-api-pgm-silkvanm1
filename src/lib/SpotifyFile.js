/**
 * Writing to a spotify JSON file
 */

import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export default class SpotifyFile {
    constructor(filename) {
        this.filename = filename;
    }
    /**
     * Adds a spotify
     * @param {*} description 
     */
    add(description) {
        try {
            // ik haal de bestaande muziek op
            const allMusic = this.get();

            // ik maak een nieuwe muziek (als object)
            const music = {
                id: uuidv4(),
                description
            }
            // ik voeg mijn nieuwe muziek aan mijn array toe
            allMusic.push(music);

            // ik bewaar mijn nieuwe muziek array
            this.save(allMusic);

            // ik geef de nieuwe muziek terug
            return music;

        } catch(e) {
            console.log(e);
        }
    }

     /**
     * Updates an excisting spotify item
     * @param {*} id 
     * @param {*} description 
     */
      update(id, description) {
        try {

        // Get all todos
        const allMusic = this.get();

        // Find the todo with a specific id
        const music = allMusic.find(m => m.id === id);

        // Change music
        music.description = description;

        // Save file
        this.save(allMusic);

        // return the updated todo
        return music;

        }catch(e){
            console.log(e)
        }

    } 

    /**
     * 
     * @param {*} id 
     */
    delete(id) {
        try {
            const allMusic = this.get();
            const filteredMusic = allMusic.filter(m => m.id !== id);
            this.save(filteredMusic);
        } catch(e) {
            console.log(e)
        }
    }

    /**
     * The function will fetch spotify
     * @returns Returns an array with spotify items
     */
    get() {
        try {
            const data = fs.readFileSync(this.filename, 'utf-8');
            return JSON.parse(data);
        } catch(e) {
            console.log(e);
        }
        
    }

    /**
     * save a spotify array
     */
    save(spotify) {
        try {
            fs.writeFileSync(this.filename, JSON.stringify(spotify, null, 2));
        } catch(e) {
            console.log(e)
        }

    }
}