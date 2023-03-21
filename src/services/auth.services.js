const jwt = require("jsonwebtoken");

class AuthServices {
    static genToken(payload) {
        try {
            const token = jwt.sign(payload, "superchat", {
                algorithm: "HS512",
                expiresIn: "60m",
            });
            return token;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = AuthServices;