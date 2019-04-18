const express = require('express');
const mongoose  = require('mongoose');
const cookieSession = require('cookie-session');   // give us access to cookies
const passport = require('passport');   // make passport make use of cookies
const keys = require('./Config/Keys');
require('./models/User');     // order of your require statements matter
require('./services/passport');

//require('./routes/authRoutes');

//mongoose.connect('keys.mongoURI', { useNewUrlParser: true } );
//mongoose.connect('Keys.mongoURI');   // need the actual address when I actually make the mongoDB
const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,       // how long the cookie will last in the browser( in milliseconds)
                                                // In this case => 30(days) * 24(hours) * 60(minutes) * 60(seconds) * 1000(millisec) (total of 30 days)
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;  // defines the port as either the port given to us by Heroku
                                        // Or it's port 5000 on out local machine

app.listen(PORT);                       // the app should listen on one of the const PORT we just defined

//app.listen(process.env.PORT || 5000); // Here, we just combine the two lines of code.
