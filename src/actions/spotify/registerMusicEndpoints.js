/**
 * Register the endpoints
 */
import Express from 'express';
import * as crudSongs from './crudSongs.js';
import * as crudUser from './crudUser.js';
import * as crudPlaylist from './crudPlaylist.js';


import songsDb from '../../lib/songsDb.js';
import UserDb from '../../lib/userDb.js';
import playlistDb from '../../lib/playlistDb.js';

const app = Express.Router();


// export default(app) => {
    const songdata = new songsDb();
    const userdata = new UserDb();
    const playlistdata = new playlistDb();

    app.get('/songs', (req, res) => crudSongs.getSongs(songdata, req, res));
    app.post('/songs', (req, res) => crudSongs.addSongs(songdata, req, res));
    app.put('/songs/:id', (req, res) => crudSongs.updateSongs(songdata, req, res));
    app.delete('/songs/:id', (req, res) => crudSongs.deleteMusic(songdata, req, res));

    app.get('/users', (req, res) => crudUser.getUser(userdata, req, res));
    app.post('/users', (req, res) => crudUser.addUser(userdata, req, res));
    app.put('/users/:id', (req, res) => crudUser.updateUser(userdata, req, res));
    app.delete('/users/:id', (req, res) => crudUser.deleteUser(userdata, req, res));

    app.get('/playlist', (req, res) => crudPlaylist.getPlaylist(playlistdata, req, res));
    app.post('/playlist', (req, res) => crudPlaylist.addPlaylist(playlistdata, req, res));
    app.put('/playlist/:id', (req, res) => crudPlaylist.updatePlaylist(playlistdata, req, res));
    app.delete('/playlist/:id', (req, res) => crudPlaylist.deletePlaylist(playlistdata, req, res));

export default app;
// }
