const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Type = db.define('type', {
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

module.exports = Type;

// INSERT INTO types (name) values ('single'), ('group');