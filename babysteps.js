var sum=0;
for (var i = 2; i < process.argv.length; i++) {
    var sum = Number(process.argv[i]) + sum;
}
console.log(sum);
