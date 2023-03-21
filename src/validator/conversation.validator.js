const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createConversationSingleValidator = [
    check("title", "Error con el campo title")
        .exists()
        .withMessage("La propiedad 'title' debe existir")
        .notEmpty()
        .withMessage("La propiedad 'title' no debe estar vacio")
        .isString()
        .withMessage("La propiedad 'title' debe ser un string")
        .isLength({ min: 3, max: 50 })
        .withMessage("La propiedad 'title' debe tener entre 3 y 50 caracteres"),
    check("user_creator", "Error con campo 'user_creator'")
        .exists()
        .withMessage("La propiedad 'user_creator' debe existir")
        .notEmpty()
        .withMessage("No se encontro un valor para 'user_creator'")
        .isInt()
        .withMessage("El valor de la propiedad 'user_creator' debe ser un numero entero"),
    check("user_guest", "Error con campo 'user_guest'")
        .exists()
        .withMessage("La propiedad 'user_guest' debe existir")
        .notEmpty()
        .withMessage("No se encontro un valor para 'user_guest'")
        .isInt()
        .withMessage("El valor de la propiedad 'user_guest' debe ser un numero entero"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const createConversationGroupValidator = [
    param("iduser").isInt().withMessage("El id debe ser un numero entero"),
    check("participants")
        .exists()
        .withMessage("La propiedad 'participants' debe existir")
        .notEmpty()
        .withMessage("No se encontro un valor para 'participants'")
        .isArray()
        .withMessage("El atributo 'participanst' debe ser un array"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const paramsIdValidator = [
    param("id").isInt().withMessage("El id debe ser un numero entero"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    createConversationSingleValidator,
    createConversationGroupValidator,
    paramsIdValidator
}