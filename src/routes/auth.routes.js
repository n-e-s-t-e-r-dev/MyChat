const { Router } = require("express");
const { userLogin } = require("../controllers/auth.controllers");
const { loginValidator } = require("../validator/user.validator");

const router = Router();

router.post("/api/v1/auth/login", loginValidator, userLogin);

module.exports = router;
