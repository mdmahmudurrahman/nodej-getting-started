console.log("Hello node");

const _ = require("lodash");
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");



var user = os.userInfo();

console.log("user name: " + user.username);
console.log("UID: " + user.uid);
console.log("User info: " + JSON.stringify(user));
console.log(`First function call: ${notes.addNote()}`);
console.log(`Secong function call with parameter: ${notes.sumNumber(4, 10)}`);

_.forEach([1, 2, 3, 4], (n) => {
  if(n == 3){
    console.log(n);
    return;
    console.log(n);
  }
});
fs.appendFile("greetings.txt", `Hello ${user.username}! you are ${notes.age} `);

