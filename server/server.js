var app = require('express')();
const mongoose = require('mongoose');
const passport = require('passport');
var http = require('http').createServer(app);
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");



const PORT = 8080;


require('./models/User');
//require('./services/passport');

// Initiate Mongo Server
InitiateMongoServer();



app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use("/", user);


//require('./routes/authRoutes')(app);



http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

