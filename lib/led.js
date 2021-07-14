const { exec } = require("child_process");

function staGreenOn() {
    return exec("sudo sh -c 'echo 255 > /sys/class/leds/usr_led2/brightness'");
}

function staGreenOff() {
    return exec("sudo sh -c 'echo 0 > /sys/class/leds/usr_led2/brightness'");
}

function staRedOn() {
    return exec("sudo sh -c 'echo 255 > /sys/class/leds/usr_led1/brightness'");
}

function staRedOff() {
    return exec("sudo sh -c 'echo 0 > /sys/class/leds/usr_led1/brightness'");
}

function usrGreenOn() {
    return exec("sudo sh -c 'echo 255 > /sys/class/leds/usr_led0/brightness'");
}

function usrGreenOff() {
    return exec("sudo sh -c 'echo 0 > /sys/class/leds/usr_led0/brightness'");
}
  

module.exports = { staGreenOn, staGreenOff, staRedOn, staRedOff, usrGreenOn, usrGreenOff };
  