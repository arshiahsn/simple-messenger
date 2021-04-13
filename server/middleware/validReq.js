const { check, validationResult} = require("express-validator/check");
module.exports = {
    validate : function(req, res){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.send(400, errors.array());
        }
    }
}