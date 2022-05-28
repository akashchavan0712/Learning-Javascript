const os = require("os");

// Perform Operating System Operation

// Lets You Know About System Architecture

let sysArch = os.arch();
console.log(sysArch);

// Returns CPU information

let cpuinfo = os.cpus();
console.log(cpuinfo);

// Rerturn Total Uptime Of THe System in Seconds

let upt = os.uptime()/ (3600 * 24);
console.log("Total Uptime of System is : "+upt+" Days");

// Returns Hostname or User Name

let Hostname = os.hostname();
console.log(`Hostname is :  ${Hostname}`);

//  Returns All The networking Related Data

let networkInfo = os.networkInterfaces();
console.log(networkInfo);

// Returns OS Release
let osinfo = os.release();
let mem = os.totalmem();
let userInfo = os.userInfo();

console.log(osinfo);
console.log(mem);
console.log(userInfo);

// Some More Opertaions

console.log(os.release());       // Returns OS as a string
console.log(os.platform());     // Platform For Which NodeJS was Compiled
console.log(os.type());         // Returns Operating System Name