var things = require('./things');
var events = require('events');
var util = require('util');

var myEmit = new events.EventEmitter();

myEmit.on('some_event', function ( text) {
   console.log(text);
});
// console.log(counter([1,7,99,8,45,8]));
myEmit.emit('some_event', 'event work properly');
var Cars = function (model) {
   this.model = model;
   };

util.inherits(Cars, events.EventEmitter);

var bmw = new Cars('BMW');
var audi = new Cars('Audi');
var volvo = new Cars('volvo');


var cars = [bmw, audi, volvo];
cars.forEach(function (car) {
   car.on('speed', function (text) {
       console.log(car.model + " speed is - "+ text);
   })
});

bmw.emit('speed', '254 km/h');
volvo.emit('speed', '180 km/h');
