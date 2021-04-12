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
    app.post('/songs', (req, res) => crudSongs.addSongs(songdata, req, res));
    app.put('/songs/:id', (req, res) => crudSongs.updateSongs(songdata, req, res));
    app.delete('/songs/:id', (req, res) => crudSongs.deleteMusic(songdata, req, res));

}

