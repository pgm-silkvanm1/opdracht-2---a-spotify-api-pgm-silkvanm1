/**
 * All crud operation actions together
 */

/**
 * Getting a user
 * @param {*} user
 * @param {*} req
 * @param {*} res
 */
export const getUser = async (user, req, res) => {
try {
    res.status(200).json({ users: await user.get() });
} catch({ message }) {
    res.status(500);
    res.json({ error: message });
}
};

/**
 * Creates a new user
 *
 * @param {*} user
 * @param {*} req
 * @param {*} res
 */
export const addUser = async (user, req, res) => {
try {
    const { name, username, email, admin }  = req.body;
    const newUser = await user.add(name, username, email, admin);
    res.status(200).json(`created user : ${name}`);
} catch({ message }) {
    response.status(500).json({ error: message });
}
};

/**
 * Update a user
 *
 * @param {*} user
 * @param {*} req
 * @param {*} res
 */
export const updateUser = async (users, req, res) => {
    try {
        const { user } = req.body;
        const id = req.params.id;
        const updatedUser = await users.update(id, user);
        res.status(200).json(`updated the ${user.name}`);
    } catch({ message }) {
        res.status(500).json({ error: message });

    }
};

/**
 * Delete a user
 *
 * @param {*} user
 * @param {*} req
 * @param {*} res
 */

export const deleteUser = async (user, req, res) => {
try {
    const id = req.params.id;
    await user.delete(id);
    res.status(204).end();
}
catch({ message }) {
    res.status(500).json({ error: message });
}
};