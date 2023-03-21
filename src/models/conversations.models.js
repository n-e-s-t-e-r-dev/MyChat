const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Conversation = db.define('conversation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    type_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: true,
        createdAt: false
    }
);

module.exports = Conversation;