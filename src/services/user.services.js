const Users = require("../models/users.models");

class UsersServices {
    static async getUser(email) {
        try {
            const user = await Users.findOne({
                where: { email },
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await Users.findAll({
                attributes: {
                    exclude: ["createdAt", "password"]
                }
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async create(newUser) {
        try {
            const userCreated = await Users.create(newUser);
            return userCreated;
        } catch (error) {
            throw error;
        }
    }

    static async update(id, updateUserData) {
        try {
            const updatedUser = await Users.update(updateUserData, {
                where: { id },
            });
            return updatedUser;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UsersServices;
