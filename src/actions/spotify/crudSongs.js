/**
 * All crud operation actions together
 */


/**
 * Getting a song
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
 * Creates a new song
 *
 * @param {*} song
 * @param {*} req
 * @param {*} res
 */
export const addSongs = async (song, req, res) => {
  try {
    const { title, artist, uri}  = req.body;
    const newSong = await song.add(title, artist, uri);
    res.status(200).json(`created song : ${title}`);
  } catch({ message }) {
        response.status(500).json({ error: message });

   
  }
};
  
/**
 * Update a song
 *
 * @param {*} song
 * @param {*} req
 * @param {*} res
 */
export const updateSongs = async (songs, req, res) => {
  try {
    const { song } = req.body;
    const id = req.params.id;
    const updatedSong = await songs.update(id, song);
    res.status(200).json(`updated the ${song.title}`);
  } catch({ message }) {
    response.status(500).json({ error: message });

  }
};
  
/**
 * Delete a song
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