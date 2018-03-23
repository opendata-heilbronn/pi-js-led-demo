const Gpio = require('onoff').Gpio;
const LED = new Gpio(24, 'out'); 

const pause = 100;
const shortDelay = 300;
const longDelay = 600;


function off() {
	LED.writeSync(0);
}

function on() {
	LED.writeSync(1);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function sos() {
        for (let x = 0; x < 3; x++) {
                on();
                await delay(shortDelay);
                off();
                await delay(pause);
        }
        for (let x = 0; x < 3; x++) {
                on();
                await delay(longDelay);
                off();
                await delay(pause);
        }
        for (let x = 0; x < 3; x++) {
                on();
                await delay(shortDelay);
                off();
                await delay(pause);
        }
        return true;
}

sos();



