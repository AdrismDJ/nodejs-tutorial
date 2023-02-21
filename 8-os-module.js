//os is a Built In module, no need for installation. 
const os = require('os');

// Built In Methods: 
const user = os.userInfo(); 
console.log(user);

// Method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS); 