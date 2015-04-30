var express = require('express');
var http = require('http');
var morgan = require('morgan');
var favicon = require('serve-favicon');
var app = express();
var port = process.env.PORT || 8080;

var server = http.createServer(app);


app.use(morgan('dev'));
app.use(favicon(__dirname + '/../client/assets/favicon.ico'));
app.use(express.static(__dirname + '/../client'));

app.listen(port);