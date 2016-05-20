var fs = require('fs');

var buff= fs.readFile(process.argv[2], function callback(err,data){
  var stri= data.toString();
  var lines =stri.split("\n").length-1;
  console.log(lines);
});
