var express = require('express');
var app = express();
var mongoose = require('mongoose');
var User = require('./api/models/userModel');
var bodyParser = require('body-parser');
var PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/sfdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected correctly to SF db server");
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require('./api/routes/userRoutes');
routes(app);

app.listen(PORT, ()=>{
    console.log('API started on port '+PORT);
});
