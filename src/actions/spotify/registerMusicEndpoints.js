/**
 * Register the endpoints
 */

import {
    getMusic,
    updateMusic
} from './crudSpotify.js';
import MusicFile from '../../lib/SpotifyFile.js';
import MusicDb from '../../lib/musicDb.js';


export default(app) => {
    const musicfile = new MusicFile(process.env.DATA_PATH);
    const musicDb = new MusicDb();
    app.get('/music', (req, res) => getMusic(MusicDb, req, res));
    app.post('/music', (req, res) => addMusic(MusicDb, req, res));
    app.put('/music', (req, res) => updateMusic(musicfile, req, res));
    app.delete('/music', (req, res) => deleteMusic(musicfile, req, res));

}