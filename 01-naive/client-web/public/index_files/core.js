var N = 0, sum = 0, mean = 0, max = 0, min = 0;
var NN = 0, sum2 = 0, mean2 = 0, max2 = 0, min2 = 0;
var NNN = 0, sum3 = 0, mean3 = 0, max3 = 0, min3 = 0;

var socket = io("http://192.168.2.15:11111");

var pubnub = new PubNub({
  publishKey: 'pub-c-6de26755-c6e0-46f0-b2ad-63e21f34333d',
  subscribeKey: 'sub-c-b7d00dae-c779-11e7-9695-d62da049879f'
});

/* GAUGE CHARTS */
var gaugechart = eon.chart({
  pubnub: pubnub,
  channels: ['eon-gauge'],
  generate: {
    bindto: '#div1',
    data: {
      type: 'gauge',
    },
    gauge: {
      min: 0,
      max: 250
    },
    color: {
      pattern: ['#FF0000', '#F6C600', '#60B044'],
      threshold: {
        values: [30, 100, 200]
      }
    }
  }
});

var gaugechart2 = eon.chart({
  pubnub: pubnub,
  channels: ['eon-gauge2'],
  generate: {
    bindto: '#div4',
    data: {
      type: 'gauge',
    },
    gauge: {
      min: 0,
      max: 100
    },
    color: {
      pattern: ['#FF0000', '#F6C600', '#60B044'],
      threshold: {
        values: [30, 60, 90]
      }
    }
  }
});

var gaugechart3 = eon.chart({
  pubnub: pubnub,
  channels: ['eon-gauge3'],
  generate: {
    bindto: '#div7',
    data: {
      type: 'gauge',
    },
    gauge: {
      min: 0,
      max: 120
    },
    color: {
      pattern: ['#FF0000', '#F6C600', '#60B044'],
      threshold: {
        values: [30, 60, 90]
      }
    }
  }
});

/* SPLINE CHART */
var splinechart = eon.chart({
	pubnub: pubnub,
  channels: ['eon-spline'],
  history: false,
  flow: true,
  limit: 5,
  generate: {
    bindto: '#div2',
    data: {
      labels: true
    }
  },
});

var splinechart2 = eon.chart({
	pubnub: pubnub,
  channels: ['eon-spline2'],
  history: false,
  flow: true,
  limit: 5,
  generate: {
    bindto: '#div5',
    data: {
      labels: true
    }
  },
});

var splinechart3 = eon.chart({
	pubnub: pubnub,
  channels: ['eon-spline3'],
  history: false,
  flow: true,
  limit: 5,
  generate: {
    bindto: '#div8',
    data: {
      labels: true
    }
  },
});

/* BAR CHARTS */
var barchart = eon.chart({
	pubnub: pubnub,
  channels: ['eon-bar'],
  generate: {
    bindto: '#div3',
    data: {
      labels: true,
      type: 'bar'
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    tooltip: {
        show: false
    }
  }
});

var barchart2 = eon.chart({
	pubnub: pubnub,
  channels: ['eon-bar2'],
  generate: {
    bindto: '#div6',
    data: {
      labels: true,
      type: 'bar'
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    tooltip: {
        show: false
    }
  }
});

var barchart3 = eon.chart({
	pubnub: pubnub,
  channels: ['eon-bar3'],
  generate: {
    bindto: '#div9',
    data: {
      labels: true,
      type: 'bar'
    },
    bar: {
      width: {
        ratio: 0.5
      }
    },
    tooltip: {
        show: false
    }
  }
});

// eon-chart: gauge
function gauge_fn(digit) {
	pubnub.publish({
		channel: 'eon-gauge',
		message: {
			eon: {
				'data': digit
			}
		}
	});
}

function gauge_fn2(digit) {
	pubnub.publish({
		channel: 'eon-gauge2',
		message: {
			eon: {
				'data': digit
			}
		}
	});
}

function gauge_fn3(digit) {
	pubnub.publish({
		channel: 'eon-gauge3',
		message: {
			eon: {
				'data': digit
			}
		}
	});
}

// eon-chart: spline
function spline_fn(digit) {
	pubnub.publish({
		channel: 'eon-spline',
		message: {
			eon: {
				'data': digit
			}
		}
	});
}

function spline_fn2(digit) {
	pubnub.publish({
		channel: 'eon-spline2',
		message: {
			eon: {
				'data': digit
			}
		}
	});
}

function spline_fn3(digit) {
	pubnub.publish({
		channel: 'eon-spline3',
		message: {
			eon: {
				'data': digit
			}
		}
	});
}

function bar_fn(digit) {
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

function bar_fn2(digit) {
	// find min, max, avg
	++NN; 
	sum2 = sum2 + parseFloat(digit);

	if(NN == 1) { min2 = digit; }
	if(max2 <= digit) { max2 = digit; }
	if(min2 >= digit) { min2 = digit; }
	mean2 = sum2 / NN;

	//console.log("celcius-N: " + parseFloat(NN));
	pubnub.publish({
		channel: 'eon-bar2',
		message: {
			eon: {
				'Min': min2,
				'Max': max2,
				'Average': mean2.toFixed(2)
			}
		}
	});
}

function bar_fn3(digit) {
	// find min, max, avg
	NNN++; 
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

// upon successful connection
socket.on('connect', function() {
	console.log("connected to server.");

	// while receive stream of data, do this actions
	socket.on('uv', function(val) {
		var digit = parseFloat(val).toFixed(2);
		//console.log("data: " + digit);
		document.getElementById("myspan").textContent = digit;

		gauge_fn(digit); // load eon-chart: gauge
		spline_fn(digit); // load eon-chart: spline
		bar_fn(digit); // load eon-chart: bar
	}); // end of 'msg'

	socket.on('celcius', function(val) {
		var digit = parseFloat(val).toFixed(2);
		console.log("celcius: " + digit);

		gauge_fn2(digit);
		spline_fn2(digit);
		bar_fn2(digit);
	});

	socket.on('humidity', function(val) {
		var digit = parseFloat(val).toFixed(2);
		console.log("humid: " + digit);

		gauge_fn3(digit);
		spline_fn3(digit);
		bar_fn3(digit);
	});
});

