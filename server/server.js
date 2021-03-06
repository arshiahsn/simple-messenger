var app = require('express')();
const mongoose = require('mongoose');
const passport = require('passport');
var http = require('http').createServer(app);
const bodyParser = require("body-parser");
require('dotenv').config();
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
const cookieParser = require('cookie-parser')


const PORT = 3001;


require('./models/User');


// Initiate Mongo Server
InitiateMongoServer();



app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser())
app.use(bodyParser.json());
app.use("/auth", user);





http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

