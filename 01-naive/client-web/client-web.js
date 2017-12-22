var express = require('express');
var app = express();
var http = require('http').Server(app);

var port = 55555;

app.use('/', express.static('public'));

http.listen(port, function() {
	console.log("listening at *:55555"); // web is listening on *:55555
});