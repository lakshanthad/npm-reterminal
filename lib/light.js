const fs = require('fs');

var lightPath = '/sys/bus/iio/devices/iio:device0/in_illuminance_input';

function lightSense() {
  return fs.readFileSync(lightPath, 'utf8');
}

module.exports = { lightSense };


