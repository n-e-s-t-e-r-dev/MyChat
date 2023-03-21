const Users = require("./users.models");
const Members = require("./members.models")
const Conversations = require("./conversations.models")
const Type = require("./type.models")
const UserState = require("./userState.models")
const Messages = require("./messages.models")


const initModels = () => {

    // Users.hasMany(Posts, { foreignKey: "author" });
    // Posts.belongsTo(Users, { as: "author_name", foreignKey: "author" });

    Type.hasMany(Conversations, { foreignKey: "type_id" });
    Conversations.belongsTo(Type, { foreignKey: "type_id" })

    Conversations.hasMany(Members, { foreignKey: "conversation_id" });
    Members.belongsTo(Conversations, { foreignKey: "conversation_id" })

    UserState.hasMany(Members, { foreignKey: "state_id" });
    Members.belongsTo(UserState, { foreignKey: "state_id" })

    Users.hasMany(Members, { foreignKey: "user_id" });
    Members.belongsTo(Users, { foreignKey: "user_id" })

    Users.hasMany(Messages, { foreignKey: "user_id" });
    Messages.belongsTo(Users, { foreignKey: "user_id" })

    Conversations.hasMany(Messages, { foreignKey: "conversation_id" });
    Messages.belongsTo(Conversations, { foreignKey: "conversation_id" })
};

module.exports = initModels;