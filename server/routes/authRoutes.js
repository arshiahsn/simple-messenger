var passport = require('passport');


module.exports = app => {
    app.post('/login',
    passport.authenticate('local', { successRedirect: '/',
                                    failureRedirect: '/login',
                                    failureFlash: true })
    );

}