const { Router } = require("express");
const { createUser, getAllUser, updateUser } = require("../controllers/user.controllers");
const { createUserValidator, updateUserValidator } = require("../validator/user.validator");


const router = Router();

router.post("/api/v1/users/create", createUserValidator, createUser); //crear usuario

router.get("/api/v1/users", getAllUser); // obtener todos los usuarios

router.put("/api/v1/users/:id", updateUserValidator, updateUser); // actualizar usuario

module.exports = router;