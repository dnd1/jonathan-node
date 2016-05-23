var net = require('net')
  var server = net.createServer(function (socket) {
  //     manejo del socket
      var date = new Date();
      if(date.getMonth()<10)
      var month="0"+(date.getMonth()+1);
      else {
        var month=date.getMonth()+1;
      }
      var datestr=date.getFullYear()+"-"+arregla(date.getMonth()+1)+"-"+arregla(date.getDate())+" "+arregla(date.getHours())+":"+arregla(date.getMinutes());
      socket.write(datestr+"\n");
      socket.end(null);
    })
  server.listen(process.argv[2])

function arregla(fecha){
if(fecha<10)
return "0"+(fecha);
else
return fecha;
};
