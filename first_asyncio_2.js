var fs = require('fs');

var buff= fs.readFile(process.argv[2],"utf-8", function callback(err,data){
  //var stri= data.toString();
  var lines =data.split("\n").length-1;
  console.log(lines);
});
