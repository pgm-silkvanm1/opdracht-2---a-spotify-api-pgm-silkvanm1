/**
 * Function that will give us 100% certainty that the data
 * coming from the client is a music item
 */

// We will receive an object like this:
// {
//  "todo": {
//   "description": "the description"
//  }
// }

export default (request) => {
    try {
        const { music } = request.body;
  
        // validate if we have music in the body
        if (music == null) {
        throw new Error('The music object was not set.');
        }
    
        // check if we have a description
        if (music.description == null || music.description.length === 0) {
        throw new Error('The music object does not contain a description.');
        }
    
        // trim all the white/none characters in our string
        if (music.description != null) {
        music.description = todo.description.trim();
        }
    
        // return the parsed todo
        return music;
    } catch(e) {
        throw new Error('something went wrong ...')
    }
}