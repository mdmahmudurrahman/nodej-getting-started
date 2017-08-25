console.log("Hello node");

const _ = require("lodash");
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const yargs = require("yargs");

const argv = yargs.argv;

var command = process.argv[2];
console.log("Process", process.argv);
console.log("Yargs", argv);

debugger;
if(command == "add") {
  console.log("Adding new note.");
  console.log(notes.sumNumber(3, 3));
  console.log(argv.title, argv.body);
  console.log(notes.testNote(argv.title, argv.body));
}