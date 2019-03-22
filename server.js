const express = require('express');
const passport = require('passport');  // how to handle authentication
const GoogleStrategy = require('passport-google-oauth20').Strategy; // which auth stategy to use

const app = express();
// Client ID  663858297510-adv1b2rsfqjse556thsslgb9qr2os0rr.apps.googleusercontent.com
// "client_secret":  ifYPMOhteI6EFx49h61ievSX

passport.use(new GoogleStrategy()); // Creates a new instance of the Google passport stategy
                                    // passport.use => I want to use GoogleStrategy

//663858297510-adv1b2rsfqjse556thsslgb9qr2os0rr.apps.googleusercontent.com

const PORT = process.env.PORT || 5000;  // defines the port as either the port given to us by Heroku
                                        // Or it's port 5000 on out local machine

app.listen(PORT);                       // the app should listen on one of the const PORT we just defined

//app.listen(process.env.PORT || 5000); // Here, we just combine the two lines of code.
