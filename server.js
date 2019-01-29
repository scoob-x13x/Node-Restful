var express = require('express');
var bodyParser = require('body-parser');

var trainer = require('./routes/trainer');
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
var db_url = 'mongodb://localhost:27017/mydb';

//mongoose.connect("mongodb://localhost:27017/test13", { useNewUrlParser: true })

var mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true } );
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/trainer', trainer);

var port = 8123;

app.listen(port, () => {
    console.log('Server is running on Port: ' + port);
});
