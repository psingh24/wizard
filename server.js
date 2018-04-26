
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var path = require('path')




//Create App
var app = express();

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Static Files
app.use(express.static("public"));


app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})




var PORT = process.env.PORT || 8000;

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App running on port 8000!");
});

