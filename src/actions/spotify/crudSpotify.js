/**
 * All crud operatio actions together
 */


/**
 * Getting music
 * @param {*} music 
 * @param {*} request 
 * @param {*} response 
 */
export const getMusic = async (music, request, response) => {
    try {
        const dbMusic = await music.get();
        // music.get();
        response.status(200).json({ allMusic: dbMusic });
    } catch(e) {
        response.status(500).json({ error: e.message })
    }
};

/**
 * Creates a new musicfile
 *
 * @param {*} music
 * @param {*} request
 * @param {*} response
 */
 export const addMusic = (music, request, response) => {
    try {
      const { description } = parseMusic(request, response);
      const newMusic = music.add(description);
      response.status(201).json({ music: newMusic });
    } catch({ message }) {
      response.status(500).json({ error: message });
    }
  };
  
  /**
   * Update a new music item
   *
   * @param {*} music
   * @param {*} request
   * @param {*} response
   */
  export const updateMusic = (music, request, response) => {
    try {
      const { description } = parseMusic(request);
      const id = request.params.id;
      const updatedMusic = music.update(id, description);
      response.status(200).json({ todo: updatedMusic });
    }
    catch({ message }) {
      response.status(500).json({ error: message });
    }
  };
  
  /**
   * Delete a music item
   *
   * @param {*} music
   * @param {*} request
   * @param {*} response
   */
  export const deleteMusic = (music, request, response) => {
    try {
      const id = request.params.id;
      music.delete(id);
      response.status(204).end();
    }
    catch({ message }) {
      response.status(500).json({ error: message });
    }
  };