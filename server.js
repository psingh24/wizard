
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("");
var db = mongoose.connection;
//Create App
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

//View Engine
// app.set("view engine", "html");
// app.engine("html", function(path, options, callbacks) {
//     fs.readFile("path", 'utf-8', callbacks)
// });

//Static Files
app.use(express.static("public"));

//routes
// require("./controllers/api-routes.js")(app);

