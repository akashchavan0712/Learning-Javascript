// Creating a javascript object

let avenger1 = {
    superHeroName : "Captain America",
    age : 101,
    firstName : "Steve",
    lastName : "Rogers",
    isAvenger : true,
    address : {
        state : "manhatten",
        city : "New York",
        country : "USA",
    },
    signatureDialog : function()
    {
        console.log("I Can Do This All Day");
    }
}

// Creating an empty object

let obj = {

}

console.log(avenger1);
console.log(                                                             );
avenger1.signatureDialog();

// Using For Loop Inside The Captain America Object

for(let i in avenger1)
{
    console.log(avenger1[i]);
}

console.log(obj);

// Memory Allocation and Execution
var num = 5;
function cube(num) {
    var res = num * num * num;
    return res;
}

var ans1 = cube(num);
var ans2 = cube(10);
var ans3 = cube();

console.log(ans1);
console.log(ans2);
console.log(ans3);