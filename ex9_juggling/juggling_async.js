var http=require('http');
var bl=require('bl');
var results=[];
var urls=[process.argv[2],process.argv[3],process.argv[4]];
// count=0;

function getshttp(url,index){

  http.get(url, function(response) {
  response.pipe(bl(function(err,data){
//console.log(data.toString());
results[index]=data.toString();

/*count++

if (count == 3)
  printResults()*/
}));
});
};

for (var i = 0; i < 3; i++) {
getshttp(urls[i],i);
}

//function printResults(){
for (var i = 0; i < 3; i++) {
  console.log(results[i]);
}
//}
