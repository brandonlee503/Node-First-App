// Grab packages/variables we need
var express = require("express");
var app = express()
var ig = require("instagram-node").instagram();

// Configure the app

// Tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Configure instagram app with client id
ig.use({
    client_id: '',
    client_secret: ''
});

// Set the routes
app.get('/', function(req, res) {

    // Use instagram package to get popular media
    // Render home page and pass in the images
    res.render('pages/index');
});

// Start the server
app.listen(8080);
console.log("Server is running at 8080!");
