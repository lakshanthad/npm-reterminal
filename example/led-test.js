const led = require('../lib/led');

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




