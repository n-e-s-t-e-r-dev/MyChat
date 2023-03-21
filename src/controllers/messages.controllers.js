const MessagesServices = require("../services/messages.services")

const createMessage = async (req, res, next) => {
    const { id } = req.params;
    const data = req.body;
    try {
        await MessagesServices.setMessage(id, data)
        res.json()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createMessage,
}