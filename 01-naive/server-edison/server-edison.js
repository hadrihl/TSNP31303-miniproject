var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 11111;

http.listen(port, function() {
	console.log("listening at *:11111");
});

io.on('connection', function(socket) {
	console.log("connected.");

	var id = setInterval(function() {
		
		socket.emit('uv', Math.random());
		socket.emit('humidity', Math.random());
		socket.emit('celcius', Math.random());

	}, 1000);

	socket.on('disconnect', function() {
		clearInterval(id);
	});
});
