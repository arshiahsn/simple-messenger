const express = require("express");
const { check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const validateReq = require("../middleware/validReq");
const sign = require("../utility/sign");


/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
    "/signup",
    [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "The password should be more than 6 characters").isLength({
            min: 6
        })
    ],
    validateReq,
    async (req, res) => {
      //Validate request, otherwise send error
        const username = req.query.username;
        const email = req.query.email;
        const password = req.query.password;
        try {
            let user = await User.findOne({
              'username': username, 
              'email': email
            });
            
            if (user) {
                return res.send(400,'User Already Exists');
            }

            user = new User({
                username,
                email,
                password
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

        //TODO: Change the token to a cookie
        token = sign.sign(payload);
        res.status(201).json({token: token, user: user});
        } catch (err) {
            console.log(err.message);
            res.send(500,'Error in Saving');
        }
    }
);

/**
 * @method - POST
 * @param - /login
 * @description - User Login
 */
router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail()
    ],
    validateReq,
    async (req, res) => {
      //Validate request, otherwise send error
      const email = req.query.email;
      const password = req.query.password;
      try {
        let user = await User.findOne({
          'email': email
        });
        if (!user)
          return res.send(400, 'Wrong Credentials!');
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.send(400, 'Wrong Credentials!');
  
        const payload = {
          user: {
            id: user.id
          }
        };
        //TODO: Change the token to a cookie
        token = sign.sign(payload);
        res.status(200).json({token: token, user: user});
      } catch (e) {
        console.error(e);
        res.send(500, 'Server Error');
      }
    }
  );


/**
   * @method - POST
   * @param - /me
   * @description - Return current user
 */
router.get("/me", auth, async (req, res) => {
try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await User.findById(req.user.id);
    const safeUser = (({username, email}) => ({username, email}))(user);
    res.json(safeUser);
} catch (e) {
    res.send(500, 'Server Error');
}
});

module.exports = router;
