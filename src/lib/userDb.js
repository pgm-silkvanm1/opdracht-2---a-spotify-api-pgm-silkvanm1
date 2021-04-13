import knexMusic from '../../db/knexMusic.js';
import { v4 as uuidv4 } from 'uuid';

export default class UserDb {

async findOne(username) {
  try {
    return await knexMusic('users').where({ username: username }).select('*').first();
  } catch(e) {
    console.error(e.message);
  }
}


/**
 * Add user to the database
 */
  async add(name, username, email, admin) {
    try {
      const user = await knexMusic('users').insert({
        id: uuidv4(),
        name: name,
        username: username, 
        email: email,
        admin: admin
      });
      return user
    } catch(e) {
      console.error(e);
    }
  }

/**
 *  Update user from db table user
 */
  async update(id, user){
    try {
      const updatedUser = await knexMusic ('users').where("id", id).update({
        name: user.name,
        username: user.username, 
        email: user.email,
        admin: user.admin
      })
      return updatedUser;
    } catch(e) {
      console.error(e);
    }
  }
  
/**
 *  Delete user from db table user
 */
  async delete(id){
    try {
      return await knexMusic('users').where('id', id).del();
    } catch(e) {
      console.error(e);
    }
  }

/**
 *  Get user from db table user
 */
  async get() {
    try {
      return await knexMusic('users').select("*");
    } catch(e) {
      console.error(e.message);
    }
  }
}