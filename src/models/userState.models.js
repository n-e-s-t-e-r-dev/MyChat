const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const UserState = db.define('user_state', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    }
},
    {
        timestamps: false,
    }
);

module.exports = UserState;