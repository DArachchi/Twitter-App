// Dependencies:
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(methodOverride('X-HTTP-Method-Override')); 

// Make public a static directory
app.use(express.static(__dirname + '/public'));

// Requiring routes
require('./app/routes/html-routes.js')(app);
require('./app/routes/api-routes.js')(app);

// Database configuration with mongoose
mongoose.connect('mongodb://localhost/twitterdb');

var db = mongoose.connection;

// Show any mongoose errors
db.on('error', function(error) {
	console.log('Mongoose Error: ', error);
});

// Once logged in to the db through mongoose, log a success message
db.once('open', function() {
	console.log('Mongoose connection successful.');
});

// Starts up express app
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});

exports = module.exports = app;