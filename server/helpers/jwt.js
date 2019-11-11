const expressJwt = require('express-jwt');
const userService = require('../users/user.service');

function jwt() {
  return expressJwt({ secret: process.env.JWT_SECRET, expiresIn: "7 days", isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      '/users/authenticate',
      '/users/register',
    // static files
      '/',
      '/favicon.ico',
      '/\/css/\*/',
      '/\/js/\*/'
    ]
  });
}

async function isRevoked(req, payload, done) {
  const user = await userService.getById(payload.sub);

  // revoke token if user no longer exists
  if (!user) {
    return done(null, true);
  }

  done();
}

module.exports = jwt;
