/**
 * Register the endpoints
 */

import * as crudSongs from './crudSongs.js';
// import * as crudSongs from './crudSongs.js';
// import * as crudSongs from './crudSongs.js';


import songsDb from '../../lib/songsDb.js';
// import songsDb from '../../lib/songsDb.js';
// import songsDb from '../../lib/songsDb.js';


export default(app) => {
  
    const songdata = new songsDb();

    app.get('/songs', (req, res) => crudSongs.getSongs(songdata, req, res));
    app.post('/songs', (req, res) => addMusic(MusicDb, req, res));
    app.put('/songs', (req, res) => updateMusic(musicfile, req, res));
    app.delete('/songs', (req, res) => deleteMusic(musicfile, req, res));

}