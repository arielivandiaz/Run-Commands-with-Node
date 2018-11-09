
// Requirements
var express = require('express'); //Express main framework
var morgan = require('morgan'); //Request logger


var app = express(); 
var port = process.env.PORT || 3838;


// Front-end application is stored in /public (.js, .css, .ejs)
// Remember ejs ~ html
app.use(express.static(__dirname + '/public'));


app.use(morgan('dev')); // Set morgan to log every request to the console

app.set('view engine', 'ejs'); // Set up ejs how templates motor

// Define routes ****************************************************************
require('./app/routes.js')(app); // load our routes and pass in our app and fully configured passport

// Run app ***********************************************************************
app.listen(port);
console.log('Visit http://localhost:' + port);
