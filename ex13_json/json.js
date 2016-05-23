var net = require('net');
var http = require('http');
var fs = require('fs');
var url = require('url');

//si el formato es date en ISO podemos obtener dichos valores standard
function timejsonparsed(tiempo){
  return {
    hour: tiempo.getHours(),
    minute: tiempo.getMinutes(),
    second: tiempo.getSeconds()
  }
}

//si lo recibe con el formato unix
function timejsonunix(tiempo){
  return { unixtime : tiempo.getTime() }
}

  var httpserver = http.createServer( function(request,respon) {

    if(request.response=="GET"){
      urlreq=request.url;
      parsed=url.parse(urlreq,true);
      tiempo = new Date(parsed.query.iso)

      if(parsed.pathname == "/api/parsetime"){
        var result = timejsonparsed(tiempo);
        respon.writeHead(200, { 'Content-Type': 'application/json' })
        respon.end(JSON.stringify(result))

      }
      else if (parsed.pathname == "/api/unixtime") {
        var result = timejsonunix(tiempo);
        respon.writeHead(200, { 'Content-Type': 'application/json' })
        respon.end(JSON.stringify(result))
      }



    }




  });

httpserver.listen(process.argv[2]);
