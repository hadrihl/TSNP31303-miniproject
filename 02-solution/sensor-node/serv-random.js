var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 11111;

http.listen(port, function() {
	console.log("listening at *:11111");
});

var id; 

io.on('connection', function(socket) {
	console.log("connected.");

	id = setInterval(function() {
		
		socket.emit('uv', Math.random() * 100);
		socket.emit('humidity', Math.random() * 100);
		socket.emit('celcius', Math.random() * 100);

	}, 1000);

	socket.on('disconnect', function() {
		clearInterval(id);
	});
});
