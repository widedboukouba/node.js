var fs = require('fs');
//read the file
var file = fs.readFileSync(process.argv[2]);
//turn the contents into a string
var str = file.toString();
//split the contents by line
var lines = str.split("\n");
//get the length of the array
var numberOfLines = lines.length -1;
console.log(numberOfLines);