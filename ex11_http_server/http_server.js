var net = require('net');
var http = require('http');
var fs = require('fs');

  var httpserver = http.createServer( function(request,response) {
    var stream =fs.createReadStream(process.argv[3])
    stream.pipe(response);


  });

httpserver.listen(process.argv[2]);
