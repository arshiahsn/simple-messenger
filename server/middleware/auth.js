const jwt = require("jsonwebtoken");
const JWTSECRET = process.env.JWT_SECRET;

module.exports = function(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) return res.send(401, 'Auth Error');

  try {
    const decoded = jwt.verify(token, JWTSECRET);
    req.user = decoded.user;
    next();
  } catch (e) {
    console.error(e);
    res.send(500,'Invalid Token');
  }
};