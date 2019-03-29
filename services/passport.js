const passport = require('passport');  // how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; // which auth stategy to use
const keys = require('../config/Keys.js');



passport.use(new GoogleStrategy({                // Creates a new instance of the Google passport stategy
        clientID: keys.googleClientID,           // passport.use => I want to use GoogleStrategy
        clientSecret: keys.googleClientSecret,   // Arguments needed to get permission from google
        callbackURL: '/auth/google/callback'     // route the user is sent to after google grants permission
    },
    (accessToken, refreshToken, profile, done) => {
        console.log('access token', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile:', profile);
    }
    )
);
