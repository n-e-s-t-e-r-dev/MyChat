const UsersServices = require("../services/user.services");

const createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const user = await UsersServices.create(newUser);
        res.status(201).json();
    } catch (error) {
        next(error);
    }
};

const getAllUser = async (req, res, next) => {
    try {
        const result = await UsersServices.getAll();
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, lastname } = req.body;
        const result = await UsersServices.update(id, { name, lastname });
        res.status(204).send(result);
    } catch (error) {
        next(error)
    }
};

module.exports = {
    createUser,
    getAllUser,
    updateUser,
};