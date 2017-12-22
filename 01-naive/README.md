01 - Solution
=============
Naive javascript (core.js) to handle all computational and visualization (PubNub: Eon Charts). 

![Alt text](./img/01-solution.png)

Setup Intel Edison as Sensor Node (SN)
--------------------------------------
* Intel Edison with Grove Indoor Environment Kit (Temperature-Humidity sensor, uv sensor).

Setup Simple Sensor Node (SN)
-----------------------------
1. Go to 'sensor-node' directory.

2. Resolve dependencies.
```
$ npm install
```

3. Run SN (serv-random.js). This will generate random values and send it through Socket.IO stream.
```
$ node serv-random.js
``` 

Setup Client-Web
----------------
1. Go to 'client-web' directory.

2. Resolve dependencies
```
$ npm install 
```

2. Run the web (client-web.js). 
```
$ node client-web.js
```