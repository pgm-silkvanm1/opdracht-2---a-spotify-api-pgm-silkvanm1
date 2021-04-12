import knex from 'knex';

// configuration file to connect with sqlite3 db
const config = {
        client: 'sqlite3',
        connection: {
          filename: './db/music.sqlite3'
        },
    useNullAsDefault: true
};


// initiate the knex library with the config
const knexMusic = knex(config);

export default knexMusic;