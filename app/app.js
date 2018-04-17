/**
 * Module dependencies.
 */

const express = require('express'),
http = require('http'), 
path = require('path'),
session = require('express-session'),
bodyParser = require('body-parser');
let app = express();

// all environments
// app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/templates');
app.set('view engine', 'hjs');

var winston = require('winston'),
    expressWinston = require('express-winston');
    var router = require('express').Router();

app.use(bodyParser.json());
app.use(expressWinston.logger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ],
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
  }));
app.use(router);
app.use(expressWinston.errorLogger({
    transports: [
      new winston.transports.Console({
        json: true,
        colorize: true
      })
    ]
  }));
app.use(express.static(path.join(__dirname, 'public')));


http.createServer(app).listen(3513, function() {
    console.log(`Server running on port 3513`);
});