# npm package for reTerminal

This npm package can be used to access and control [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) hardware such as accelerometer, light sensor, touch panel, buzzer, buttons, LEDs

## Installation

### From npm

```sh
npm install npm-reterminal --save
```

### From Source

```sh
npm install https://github.com/lakshanthad/npm-reterminal
```

## Usage

### Accelerometer Test

````javascript
const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

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
````

### Light Sensor Test

```javascript
const light = require('npm-reterminal/lib/light');

while (true) {
    console.log("Light Intensity: " + light.lightSense());
}
```

### Touch Panel Test

```javascript
const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

const touch = new InputEvent.Touch(dev.tpPath());

touch.on('x-axis', function(buffer){
    console.log('x-axis coordinate=' + buffer)
});

touch.on('y-axis', function(buffer){
    console.log('y-axis coordinate=' + buffer)
});
```

### Buttons Test

```javascript
const InputEvent = require('npm-reterminal');
const dev = require('npm-reterminal/lib/deviceid');

const button = new InputEvent.Button(dev.buttonsPath());

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
```

### Buzzer Test

```javascript
const buzz = require('npm-reterminal/lib/buzzer');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedGreeting() {
    console.log("buzzer is ON");
    buzz.buzzerOn();
    await sleep(1000);
    console.log("buzzer is OFF");
    buzz.buzzerOff();
    await sleep(1000);
    console.log("buzzer is ON");
    buzz.buzzerOn();
    await sleep(1000);
    console.log("buzzer is OFF");
    buzz.buzzerOff();
    await sleep(1000);
  }
  
  delayedGreeting();
```

### LEDs Test

```javascript
const led = require('npm-reterminal/lib/led');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function delayedGreeting() {
    console.log("staGreenOn");
    led.staGreenOn();
    await sleep(1000);
    console.log("staGreenOff");
    led.staGreenOff();
    await sleep(1000);
    console.log("staRedOn");
    led.staRedOn();
    await sleep(1000);
    console.log("staRedOff");
    led.staRedOff();
    await sleep(1000);
    console.log("usrGreenOn");
    led.usrGreenOn();
    await sleep(1000);
    console.log("usrGreenOff");
    led.usrGreenOff();
    await sleep(1000);
  }
  
  delayedGreeting();
```