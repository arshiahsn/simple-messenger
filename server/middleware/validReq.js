const { check, validationResult} = require("express-validator/check");
module.exports = function(req, res, next){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send(400, errors.array());
        }
        next();
}