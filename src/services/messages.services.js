const Messages = require("../models/messages.models");

class MessagesServices {
    static async setMessage(id, data) {
        data["user_id"] = id
        try {
            Messages.create(data)
        } catch (error) {
            throw error;
        }
    }
}

module.exports = MessagesServices;