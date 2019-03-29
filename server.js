const express = require('express');
require('./services/passport');
require('./routes/authRoutes');


const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;  // defines the port as either the port given to us by Heroku
                                        // Or it's port 5000 on out local machine

app.listen(PORT);                       // the app should listen on one of the const PORT we just defined

//app.listen(process.env.PORT || 5000); // Here, we just combine the two lines of code.
