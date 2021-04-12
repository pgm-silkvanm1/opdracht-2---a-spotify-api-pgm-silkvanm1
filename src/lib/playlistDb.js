// import knexMusic from '../../db/knexMusic.js';
// import { v4 as uuidv4 } from 'uuid';
// import { date } from 'faker';

// export default class PlaylistDb {
// /**
//  * Add user to the database
//  */
//   async add(title, user, list) {
//     try {
//       return await knexMusic('playlist').insert({
//         playlistid: uuidv4(),
//         title: title,
//         user: user,
//         createdAt: Date.now(), 
//         modifiedAt: Date.now(),
//         list: JSON.stringify(list)
//       });
//     } catch(e) {
//         console.error(e);
//     }
//   }

// /**
//  *  Update user from db table user
//  */
//   async update(title, user, list){
//     try {
//       return await knexMusic('playlist').where('playlistid', playlistid).update({
//         playlistid: uuidv4(),
//         title: title,
//         user: user,
//         createdAt: Date.now(), 
//         modifiedAt: Date.now(),
//         list: JSON.stringify(list)
//       })
//     } catch(e) {
//       console.error(e);
//     }
//   }

// /**
//  *  Delete user from db table user
//  */
//   async delete(){
//     try {
//       return await knexMusic('playlist').where('playlistid', playlistid).del();
//     } catch(e) {
//       console.error(e);
//     }
//   }

// /**
//  *  Get user from db table user
//  */
//   async get() {
//     try {
//       return await knexMusic('playlist').select("*");
//     } catch(e) {
//       console.error(e.message);
//     }
//   }
// }