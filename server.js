var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/sfdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected correctly to le db server");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes');
routes(app);

app.listen(port);

console.log('API started on port' + port);
