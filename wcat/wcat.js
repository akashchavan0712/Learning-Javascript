let fs = require("fs");
const { PassThrough } = require("stream");
// node wcat.js filepath => displays the contents of a file in terminal
let input = process.argv.slice(2); 
//slice actually slices the data and skips the input;
//The Path of NodeJS and The File Path is not printed;
let fileArr = [];
// for(let i = 0 ; i < input.length ; i++)
// {
//     fileArr.push(input[i]);
// }
// console.log("Files To Be Added Are : "+fileArr);
// Now Checking whether the files exist or not inside

let optionsArr = [];
for(let i=0; i<input.length; i++)
{
    let firstChar = input[i].charAt(0);
    // console.log(firstChar);
    if(firstChar == '-')
    {
        optionsArr.push(input[i]);
    }
    else
    {
        fileArr.push(input[i]);
    }
}

for(let i=0; i<fileArr.length; i++)
{
    let doesExist = fs.existsSync(fileArr[i]);
    if (!doesExist)
    {
        console.log("Files Does Not Exist");
    }
    process.exit();
}

// Now We Want To Read File Data From A File
let content = "";
for(let i = 0; i < fileArr.length; i++)
{
    let fileContent = fs.readFileSync(fileArr[i]);
    content =  content + fileContent + "\r\n" ;
}
let contentArr = content.split("\r\n");

// console.table(contentArr);
// Check Whether -s is present or not

let isSPresent = optionsArr.includes('-s');
let withoutNull = [];

// Since The Presence Is Confirmed
if(isSPresent)
{
    for (let i = 1; i < contentArr.length; i++) 
    {
        if(contentArr[i] == "" && contentArr[i-1] == "")
        {
            contentArr[i] = null;
        }
        else if(contentArr[i] == "" && contentArr[i-1] == null)
        {
            contentArr[i] = null;
        }
    }

    // console.table(contentArr);
    // Pushing Everything Inside The Temporary Array Except Null Values
    for (let i = 0; i < contentArr.length; i++) 
    {
        if(contentArr[i] != null)
        {
            withoutNull.push(contentArr[i]);
        }
    }

    // console.table(withoutNull);
    contentArr = withoutNull;
}


// Now We Have To Check Whether There are one or more option commands

let indexOfN = optionsArr.indexOf("-n");
let indexOfB = optionsArr.indexOf('-b');

// If Index of The Given Operator is Present then returns the index;
// IF Index of The Given Operator is not Present then returns -1;

// If both -n and -b are not present
let finalOption = "";
if(indexOfN != -1 && indexOfB != -1)
{
    if(indexOfN < indexOfB){
        finalOption = "-n";
    }
    else{
        finalOption = "-b";
    }
}
// If either -n || -b is present
else{
    if(indexOfN != -1)
    {
        finalOption = "-n";
    }
    else if(indexOfB != -1) {
        finalOption = "-b";
    }
}

if(finalOption == "-n")
{
    modifyContentbyN();
}
else if (finalOption == "-b")
{
    modifyContentbyB();
}

console.log(contentArr);
//  Creating Two Functions for performing operation
function modifyContentbyN()
{
    for (let i = 0; i < contentArr.length; i++) {
        contentArr[i] = (i+1) + ") " + contentArr[i];
    }
    console.log(contentArr);
}

function modifyContentbyB()
{
    let count = 1;
    for (let i = 0; i < contentArr.length; i++) 
    {
        if(contentArr[i] != ""){
            contentArr[i] = count + ") " + contentArr[i];
            count++;
        }
    }
    console.log(contentArr);
}
