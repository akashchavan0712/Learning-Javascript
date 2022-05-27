const file1 = require("fs");

// Adding / Writing Content or Text Inside The JavaScript File using NodeJS module 

let add = file1.writeFileSync("f1.txt", "Hello There");
let add1 = file1.appendFileSync("f1.txt", "\nThis is Really Interesting and Informative");

//  Reading The File

let reads = file1.readFileSync("f1.txt","utf-8");
console.log(reads);