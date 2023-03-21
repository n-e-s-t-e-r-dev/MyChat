const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Members = db.define('members', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    conversation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
    {
        timestamps: false,
    }
);

module.exports = Members;