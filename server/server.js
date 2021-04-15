var app = require('express')();
const mongoose = require('mongoose');
const passport = require('passport');
var http = require('http').createServer(app);

const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const user = require("./routes/user");
require('dotenv').config()

var io = require('socket.io')(http);
const PORT = 3001;


require('./models/User');


// Initiate Mongo Server
InitiateMongoServer();



app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use("/auth", user);






http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});


io.on('connection', (socket) => { /* socket object may be used to send specific messages to the new connected client */

    console.log('new client connected');
});
