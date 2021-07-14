const InputEvent = require('../');
const dev = require('../lib/deviceid');

const input = new InputEvent(dev.buttonsPath());

const button = new InputEvent.Button(input);

button.on('F1ON' , function(){
    console.log('F1 Pressed');
});

button.on('F1OFF' , function(){
    console.log('F1 Released');
});

button.on('F2ON' , function(){
    console.log('F2 Pressed');
});

button.on('F2OFF' , function(){
    console.log('F2 Released');
});

button.on('F3ON' , function(){
    console.log('F3 Pressed');
});

button.on('F3OFF' , function(){
    console.log('F3 Released');
});

button.on('OON' , function(){
    console.log('O Pressed');
});

button.on('OOFF' , function(){
    console.log('O Released');
});