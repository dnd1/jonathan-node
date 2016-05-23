var fs = require('fs');
var buff= fs.readFileSync(process.argv[2]);
var stri= buff.toString();
var lines =stri.split("\n").length-1;
console.log(lines);
