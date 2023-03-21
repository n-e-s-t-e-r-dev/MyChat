const Conversations = require("../models/conversations.models")
const Members = require("../models/members.models");
const Users = require("../models/users.models");
const Messages = require("../models/messages.models");


class ConversationsServices {
    static async create(data) {
        try {
            const result = await Conversations.create(data);
            return result
        } catch (error) {
            throw error;
        }
    }

    static async getData(id) {
        try {
            const result = await Conversations.findByPk(id, {
                attributes: { exclude: ["updatedAt"] },
                include: [{
                    model: Members,
                    attributes: ["user_id"],
                    include: {
                        model: Users,
                        attributes: ["username"]
                    }
                },
                {
                    model: Messages,
                    attributes: ["message", "user_id"],
                    include: {
                        model: Users,
                        attributes: ["username"]
                    }
                }]

            })
            return result
        } catch (error) {
            throw error;
        }
    }

    static async delete(id) {
        try {
            await Members.destroy({
                where: { "conversation_id": id },
            })
            await Messages.destroy({
                where: { "conversation_id": id },
            })
            await Conversations.destroy({
                where: { id },
            })
        } catch (error) {
            throw error;
        }
    }


}

module.exports = ConversationsServices;