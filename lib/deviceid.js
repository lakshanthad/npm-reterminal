const process = require('process');
const fs = require('fs');

var deviceFilePath = '/sys/class/input/';
var intputdevPath  = '/dev/input/';
var tpfilePath = null;
var ButtonsPath = null;
var AcceleratorPath = null; 

appFilePath = process.cwd();
process.chdir(deviceFilePath);
const number = fs.readdirSync(process.cwd()).length

for (let num = 0; num < number; num++) {
    namePath =`/sys/class/input/event${num}/device/name`;
    if (fs.existsSync(namePath)) {
        devname = fs.readFileSync(namePath, 'utf-8').split('\n')[0];
        if (devname == 'seeed-tp') {
            tpfilePath = intputdevPath + `event${num}`;
        }
        if (devname == 'gpio_keys') {
            ButtonsPath = intputdevPath + `event${num}`;
        }
        if (devname == 'ST LIS3LV02DL Accelerometer') {
            AcceleratorPath = intputdevPath + `event${num}`;
        }
    }
}

function tpPath() {
    return tpfilePath;
}

function buttonsPath() {
    return ButtonsPath;
}

function accelPath() {
    return AcceleratorPath;
}

module.exports = { tpPath, buttonsPath, accelPath };