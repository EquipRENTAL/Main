// Importing Passport, strategies, and config
const passport = require('passport');
const User = require('../models/userSchema');
const config = require('./main');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

/*
IT appears as though: 
"
"ExtractJwt.fromAuthHeader is not a function". 
                        "

because it is now deprecated.  Instead use:
 "
ExtractJwt.fromAuthHeaderWithScheme("jwt")
"

make sure to pass "jwt" as a string. 
*/

// Tell passport to refer to email oppose to 
const localOptions = { usernameField: 'email' }; 

// Setting up local login strategy
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {  
    User.findOne({ email: email }, function(err, user) {
      if(err) { return done(err); }
      if(!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }
  
      user.comparePassword(password, function(err, isMatch) {
        if (err) { return done(err); }
        if (!isMatch) { return done(null, false, { error: "Your login details could not be verified. Please try again." }); }
  
        return done(null, user);
      });
    });
  });

  const jwtOptions = {  
    // Telling Passport to check authorization headers for JWT
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
    // // Telling Passport where to find the secret
    secretOrKey: config.secret
  };


// Setting up JWT login strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {  
    console.log(payload);
    // payload._id substitutes (payload.doc._id or payload.document._id )
    User.findById(payload._id, function(err, user) {
      if (err) { return done(err, false); }
  
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  });

// initlize passport login and localLogin
passport.use(jwtLogin);  
passport.use(localLogin);  