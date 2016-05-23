var net = require('net');
var http = require('http');
var fs = require('fs');
var maps = require('through2-map')

  var httpserver = http.createServer( function(request,response) {

    if (request.method == 'POST') {
      request.pipe(maps(function(chunk){
        return chunk.toString().toUpperCase();
      })).pipe(response);
    }
    });


httpserver.listen(process.argv[2]);
