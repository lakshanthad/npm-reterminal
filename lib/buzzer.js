const { exec } = require("child_process");

function buzzerOn() {
    return exec("sudo sh -c 'echo 1 > /sys/class/leds/usr_buzzer/brightness'");
}

function buzzerOff() {
    return exec("sudo sh -c 'echo 0 > /sys/class/leds/usr_buzzer/brightness'");
}
  

module.exports = { buzzerOn, buzzerOff };