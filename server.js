const express = require('express');
const passport = require('passport');  // how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; // which auth stategy to use
const keys = require('./config/Keys.js');

const app = express();


passport.use(new GoogleStrategy({            // Creates a new instance of the Google passport stategy
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


app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']
}));   // attempt to authorize the user coming into this route
       // 'google' > assigns the string 'google' to the strategy we are using in passport.use seen above
       // scope: gives us access to username and passport

app.get('/auth/google/callback', passport.authenticate('google'));




const PORT = process.env.PORT || 5000;  // defines the port as either the port given to us by Heroku
                                        // Or it's port 5000 on out local machine

app.listen(PORT);                       // the app should listen on one of the const PORT we just defined

//app.listen(process.env.PORT || 5000); // Here, we just combine the two lines of code.
