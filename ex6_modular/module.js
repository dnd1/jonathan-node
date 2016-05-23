var fs = require('fs');
var path = require('path')
var results = [];


module.exports = function(route, ext, callback){

// no funciona con esa linea
// fs.readdir(route, function callback (err,data){

fs.readdir(route, function (err,data){
	if (err)
		return callback(err, null);
	else{
  for (var i = 0; i < data.length; i++) {
    if(path.extname(data[i]) =="."+ext)
    results.push(data[i]);
  }
  callback(null,results);
}

});
};
