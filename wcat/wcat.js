let fs = require("fs");

// node wcat.js filepath => displays the contents of a file in terminal

let input = process.argv.slice(2); 

//slice actually slices the data and skips the input;
//The Path of NodeJS and The File Path is not printed;

let fileArr = [];

for(let i = 0 ; i < input.length ; i++)
{
    fileArr.push(input[i]);
}

// console.log("Files To Be Added Are : "+fileArr);

// Now Checking whether the files exist or not inside 

for(let i=0; i<fileArr.length; i++)
{
    let doesExist = fs.existsSync(fileArr[i]);
    if (!doesExist){
        console.log("Files Does Not Exist");
    }
}

// Now We Want To Read File Data From A File

let content = "";
for(let i = 0; i < fileArr.length; i++)
{
    let fileContent = fs.readFileSync(fileArr[i]);
    content = content + fileContent + "\n";
}
console.log(content);

// Appending Data To The File