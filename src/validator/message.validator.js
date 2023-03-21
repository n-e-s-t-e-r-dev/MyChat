const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");


const messageValidator = [
    param("id").isInt().withMessage("El id debe ser un numero entero"),
    check("message")
        .exists()
        .withMessage("No se encuentra la propiedad mensaje")
        .notEmpty()
        .withMessage("El mensaje no debe estar vacio"),
    check("conversation_id")
        .exists()
        .withMessage("No existe la propiedad 'conversation_id'")
        .notEmpty()
        .withMessage("La propiedad 'conversation_id' no puede estar vacía")
        .isInt()
        .withMessage("La propiedad 'conversation_id' debe ser un numero entero"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = messageValidator;