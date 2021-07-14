const InputEvent = require('..');
const dev = require('../lib/deviceid');

const input = new InputEvent(dev.tpPath());

const touch = new InputEvent.Touch(input);

touch.on('x-axis', function(buffer){
    console.log('x-axis coordinate=' + buffer)
});

touch.on('y-axis', function(buffer){
    console.log('y-axis coordinate=' + buffer)
});