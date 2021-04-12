/**
 * All crud operation actions together
 */


/**
 * Getting song
 * @param {*} song 
 * @param {*} req
 * @param {*} res
 */
export const getSongs = async (song, req, res) => {
  try {
    res.status(200).json({ songs: await song.get() });
  } catch({ message }) {
    res.status(500);
    res.json({ error: message });
  }
};


/**
 * Creates a new musicfile
 *
 * @param {*} song
 * @param {*} req
 * @param {*} res
 */
export const addSongs = async (song, req, res) => {
  try {
    const newSong = await song.add(song);
    res.status(200).json({ songs: newSong });
  } catch({ message }) {
    res.status(500);
    res.json({ error: message });
  }
};
  
/**
 * Update a new music item
 *
 * @param {*} song
 * @param {*} req
 * @param {*} res
 */
export const updateSongs = async (song, req, res) => {
  try {
    const id = request.params.id;
    const updatedSong = await song.update(id, song);
    res.status(200).json({ songs: await updatedSong() });
  } catch({ message }) {
    res.status(500);
    res.json({ error: message });
  }
};
  
/**
 * Delete a music item
 *
 * @param {*} song
 * @param {*} req
 * @param {*} res
 */

export const deleteMusic = async (song, req, res) => {
  try {
    const id = req.params.id;
    await song.delete(id);
    res.status(204).end();
  }
  catch({ message }) {
    res.status(500).json({ error: message });
  }
};