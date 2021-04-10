/**
 *  Our main application
 */

import Express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import SpotifyFile from './lib/SpotifyFile.js';
import registerMusicEndpoints from './actions/spotify/registerMusicEndpoints.js';

// init dotenv
dotenv.config();

// create a new express application
const app = Express();

// add json body paser
app.use(bodyParser.json());
registerMusicEndpoints(app);

const spotifyFile = new SpotifyFile();



// open the app
app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`)
});

console.log('Starting the server ...');