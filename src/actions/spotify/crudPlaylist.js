/**
 * All crud operation actions together
 */

/**
 * Getting a playlist
 * @param {*} playlist 
 * @param {*} req
 * @param {*} res
 */
 export const getPlaylist = async (playlist, req, res) => {
    try {
      res.status(200).json({ playlist: await playlist.get() });
    } catch({ message }) {
      res.status(500);
      res.json({ error: message });
    }
  };
  
  /**
   * Creates a new playlist
   *
   * @param {*} playlist
   * @param {*} req
   * @param {*} res
   */
  export const addPlaylist = async (playlist, req, res) => {
    try {
      const { title, user, list }  = req.body;
      const newPlaylist = await playlist.add(title, user, list);
      res.status(200).json(`created playlist : ${title}`);
    } catch({ message }) {
      res.status(500).json({ error: message });
    }
  };
    
  /**
   * Update a playlist
   *
   * @param {*} playlist
   * @param {*} req
   * @param {*} res
   */
  export const updatePlaylist = async (playlists, req, res) => {
    try {
      const id = req.params.id;
      const { playlist } = req.body;
      const updatedSong = await playlists.update(id, playlist);
      res.status(200).json(`updated the ${playlist.title}`);
    } catch({ message }) {
      res.status(500).json({ error: message });
    }
  };
    
  /**
   * Delete a playlist
   *
   * @param {*} playlist
   * @param {*} req
   * @param {*} res
   */
  
  export const deletePlaylist = async (playlist, req, res) => {
    try {
      const id = req.params.id;
      await playlist.delete(id);
      res.status(204).end();
    }
    catch({ message }) {
      res.status(500).json({ error: message });
    }
  };