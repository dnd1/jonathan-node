var fs = require('fs');
var path = require('path')
var results = [];

module.exports = function(route, ext, callback){

fs.readdir(route, function (err, data){
if (err)
return callback(err);
else{
  for (var i in data) {
    if(path.extname(data[i])=="."+process.argv[3])
    results.push(data[i]);
  }
  callback(null,data);
}

});
};
