const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const db = require("../utils/database");

const Users = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        hooks: {
            beforeCreate: async (user) => {
                try {
                    const salt = await bcrypt.genSalt(10);
                    const passwordHash = await bcrypt.hash(user.password, salt);
                    user.password = passwordHash;
                } catch (error) {
                    throw error;
                }
            },
        },
        timestamps: true,
        updatedAt: false,
    }
);

module.exports = Users;