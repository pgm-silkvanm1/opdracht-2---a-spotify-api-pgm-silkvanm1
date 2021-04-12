import knexMusic from '../../db/knexMusic.js';
import { v4 as uuidv4 } from 'uuid';

export default class UserDb {
/**
 * Add user to the database
 */
  async add(name, username, email, admin) {
    try {
      return await knexMusic('user').insert({
        userid: uuidv4(),
        name: name,
        username: username, 
        email: email,
        admin: admin
      });
    } catch(e) {
        console.error(e);
    }
  }

/**
 *  Update user from db table user
 */
  async update(name, username, email, admin){
    try {
      return await knexMusic('user').where('userid', userid).update({
        userid: uuidv4(),
        name: name,
        username: username, 
        email: email,
        admin: admin
      })
    } catch(e) {
      console.error(e);
    }
  }

/**
 *  Delete user from db table user
 */
  async delete(){
    try {
      return await knexMusic('user').where('userid', userid).del();
    } catch(e) {
      console.error(e);
    }
  }

/**
 *  Get user from db table user
 */
  async get() {
    try {
      return await knexMusic('user').select("*");
    } catch(e) {
      console.error(e.message);
    }
  }
}