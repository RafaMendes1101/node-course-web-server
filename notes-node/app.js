console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");

const notes = require("./notes.js");

var command = process.argv[2];
console.log("Command: ",command);
//commands to be ran in the command prompt node app.js ${command} --argument="value"
if (command === "add"){
	console.log("Adding new note");
} else if (command === "list") {
	console.log("Listing all notes");
} else if (command === "read"){
	console.log("Fetching note");
} else if (command === "remove"){
	console.log("removing note");
} else {
	console.log("Command not recognized");
}

