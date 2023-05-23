//OS Module
const os = require('os')

//info abt current user
const user=os.userInfo();
console.log(user);
//uptime;
const uptime=os.uptime();
console.log(`Uptime:${uptime}`);

//
const currentOs={
    name: os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOs);
