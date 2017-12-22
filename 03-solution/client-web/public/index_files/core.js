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
