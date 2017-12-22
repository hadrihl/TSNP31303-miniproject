var express = require('express');
var app = express();
var http = require('http').Server(app);

var socket = require('socket.io-client')('http://localhost:11111');
var port = 55555;

app.use('/', express.static('public'));

http.listen(port, function() {
	console.log("listening at *:55555"); // web is listening on *:55555
});

// Initialize PubNub
var pubnub = require('pubnub');
const PubNub = require('pubnub');
var pubnub = new PubNub({
	publish_key: 'pub-c-6de26755-c6e0-46f0-b2ad-63e21f34333d',
	subscribe_key: 'sub-c-b7d00dae-c779-11e7-9695-d62da049879f'
});

var publish_gauge_fn = function(val) {
	pubnub.publish({
		channel: 'eon-gauge',
		message: {
			eon: {
				'data': val
			}
		}
	});
};

var publish_gauge_fn2 = function(val) {
	pubnub.publish({
		channel: 'eon-gauge2',
		message: {
			eon: {
				'data': val
			}
		}
	});
};

var publish_gauge_fn3 = function(val) {
	pubnub.publish({
		channel: 'eon-gauge3',
		message: {
			eon: {
				'data': val
			}
		}
	});
};

var publish_spline_fn = function(val) {
	pubnub.publish({
		channel: 'eon-spline',
		message: {
			eon: {
				'data': val
			}
		}
	});
};

var publish_spline_fn2 = function(val) {
	pubnub.publish({
		channel: 'eon-spline2',
		message: {
			eon: {
				'data': val
			}
		}
	});
};

var publish_spline_fn3 = function(val) {
	pubnub.publish({
		channel: 'eon-spline3',
		message: {
			eon: {
				'data': val
			}
		}
	});
};

// global variables
var N = 0,
	sum = 0,
	min = 0,
	max = 0,
	mean = 0;

var NN = 0,
	sum2 = 0,
	min2 = 0,
	max2 = 0,
	mean2 = 0;

var NNN = 0,
	sum3 = 0,
	min3 = 0,
	max3 = 0,
	mean3 = 0;

var publish_bar_fn = function(digit) {
	// find min, max, avg
	++N; 
	sum = sum + parseFloat(digit);

	if(N  == 1) { min = digit; }
	if(max <= digit) { max = digit; }
	if(min >= digit) { min = digit; }
	mean = sum / N;
	// console.log("N: " + N + ", sum: " + sum);

	pubnub.publish({
		channel: 'eon-bar',
		message: {
			eon: {
				'Min': min,
				'Max': max,
				'Average': mean.toFixed(2)
			}
		}
	});
}

var publish_bar_fn2 = function(digit) {
	// find min, max, avg
	++NN; 
	sum2 = sum2 + parseFloat(digit);

	if(NN  == 1) { min2 = digit; }
	if(max2 <= digit) { max2 = digit; }
	if(min2 >= digit) { min2 = digit; }
	mean2 = sum2 / NN;
	// console.log("NN: " + N + ", mean2: " + mean2);

	pubnub.publish({
		channel: 'eon-bar2',
		message: {
			eon: {
				'Min': min2,
				'Max': max2,
				'Average': mean2
			}
		}
	});
}

var publish_bar_fn3 = function(digit) {
	// find min, max, avg
	++NNN; 
	sum3 = sum3 + parseFloat(digit);

	if(NNN  == 1) { min3 = digit; }
	if(max3 <= digit) { max3 = digit; }
	if(min3 >= digit) { min3 = digit; }
	mean3 = sum3 / NNN;
	// console.log("N: " + N + ", sum: " + sum);

	pubnub.publish({
		channel: 'eon-bar3',
		message: {
			eon: {
				'Min': min3,
				'Max': max3,
				'Average': mean3.toFixed(2)
			}
		}
	});
}

socket.on('connect', function() {
	console.log("connected to server.");

	socket.on('uv', function(data) {
		var digit = parseFloat(data).toFixed(2);

		publish_gauge_fn(digit);
		publish_spline_fn(digit);
		publish_bar_fn(digit);
	});

	socket.on('celcius', function(data) {
		publish_gauge_fn2(data);
		publish_spline_fn2(data);
		publish_bar_fn2(data);
	});

	socket.on('humidity', function(data) {
		var digit = parseFloat(data).toFixed(2);
		publish_gauge_fn3(digit);
		publish_spline_fn3(digit);
		publish_bar_fn3(digit);
	});
});