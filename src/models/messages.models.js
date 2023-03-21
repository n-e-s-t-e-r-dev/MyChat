const { DataTypes } = require('sequelize');
const db = require("../utils/database")

const Messages = db.define('messages', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  conversation_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true,
  updatedAt: false
});

module.exports = Messages;