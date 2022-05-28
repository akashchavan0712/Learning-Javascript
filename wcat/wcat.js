let fs = require("fs");
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
}

// Now We Want To Read File Data From A File

let content = "";
for(let i = 0; i < fileArr.length; i++)
{
    let fileContent = fs.readFileSync(fileArr[i]);
    content =  content + fileContent + "\r\n" ;
}
let contentArr = content.split("\r\n");
console.table(contentArr);
// Check Whether -s is present or not

let isSPresent = optionsArr.includes('-s');
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
}

console.table(contentArr);