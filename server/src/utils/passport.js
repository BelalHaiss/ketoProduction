const { Strategy } = require('passport-local');
const { login } = require('../routes/users/user.controller');
const User = require('../model/user.model');
function initializePassport(passport) {
  passport.use(new Strategy({ usernameField: 'emailOrNumber' }, login));
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser((id, done) =>
    User.findById(id, function (err, user) {
      done(err, user);
    })
  );
}

module.exports = {
  initializePassport
};
