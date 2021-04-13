const jwt = require("jsonwebtoken");
const JWTSECRET = process.env.JWT_SECRET;
module.exports = {
    sign : function(payload){
        jwt.sign(
            payload,
            JWTSECRET,
            {
              expiresIn: 10000
            },
            (err, token) => {
              if (err) throw err;
              res.status(201).json({
                token
              });
              res.cookie('jwt', token, { httpOnly: true, maxAge: 3600000 });
            }
          );
    }
}

