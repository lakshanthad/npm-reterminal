const buzz = require('../lib/buzzer');

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