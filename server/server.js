var app = require('express')();
const mongoose = require('mongoose');
const passport = require('passport');
var http = require('http').createServer(app);
const PORT = 8080;


require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});



app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);



http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

