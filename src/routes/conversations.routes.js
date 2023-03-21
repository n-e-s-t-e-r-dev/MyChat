const { Router } = require("express");
const { createConversationSingle, getConversationByUserId, getConversationData, deleteConversation, createConversationGroup } = require("../controllers/conversations.controllers");
const { createConversationGroupValidator, paramsIdValidator } = require("../validator/conversation.validator");




const router = Router();


//crear una conversación de pareja
router.post("/api/v1/conversation/create", createConversationSingle);


//obtener las conversaciones de un usuario
router.get("/api/v1/users/:id/conversations", paramsIdValidator, getConversationByUserId)


//obtener usuarios y mensajes de una conversacion ById de conversación
router.get("/api/v1/conversations/:id", paramsIdValidator, getConversationData)


//eliminar una conversación
router.delete("/api/v1/conversations/:id", paramsIdValidator, deleteConversation)


//crear una conversacion grupal
router.post("/api/v1/users/:iduser/conversations/group", createConversationGroupValidator, createConversationGroup)


module.exports = router;