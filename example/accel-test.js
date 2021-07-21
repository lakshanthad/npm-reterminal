const InputEvent = require('..');
const dev = require('../lib/deviceid');
   
const accel = new InputEvent.Accel(dev.accelPath());

accel.on('A1', function(buffer){
    console.log('x-axis value=' + buffer)
});

accel.on('A2', function(buffer){
    console.log('y-axis value=' + buffer)
});

accel.on('A3', function(buffer){
    console.log('z-axis value=' + buffer)
});