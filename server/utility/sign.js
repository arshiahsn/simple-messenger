const jwt = require("jsonwebtoken");
const JWTSECRET = process.env.JWT_SECRET;
module.exports = {
    sign : function(payload){
        return jwt.sign(
            payload,
            JWTSECRET,
            {
              expiresIn: 10000
            }
          );
    }
}

