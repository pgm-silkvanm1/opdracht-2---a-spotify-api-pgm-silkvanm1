/* eslint-disable no-undef */
/**
 *  Our main application
 */

import Express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import registerMusicEndpoints from './actions/spotify/registerMusicEndpoints.js';
import customMiddleware from './middleware/index.js'
import authenticeEndpoints from './actions/auth/index.js'

// init dotenv
dotenv.config();

// create a new express application
const app = Express();

// add json body paser
app.use(bodyParser.json());

// add authentication middleware
app.use('/spotify', ...customMiddleware, registerMusicEndpoints);

app.use('/auth', authenticeEndpoints)

// open the app
// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`)
});

console.log('Starting the server ...');