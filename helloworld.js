//1
console.log("Hello world!");

//2
function main_function(another_function, value) {
    another_function(value);
}

main_function(function (param) {
    console.log(param)
}, "Hello World!");

main_function(param => console.log(param), "Hi nigga!");

main_function(() => console.log(), "Hi jigga!");

//3
//4
console.log('1');
setTimeout(callback, 5000);

console.log('2');
setTimeout(callback, 5000);

console.log('3');
setTimeout(callback, 5000);

function callback() {
    console.log('Callback called!');
}

//5
const ownmodule = require('./ownmodule');
ownmodule.relay();
ownmodule.longjump();
ownmodule.hi();

//8
const fs = require('fs');

fs.readFile('input', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log("Async data is- " + data);
    }
});

let data = fs.readFileSync('input');
console.log("Sync data is- " + data);
console.log("End of testing.");

//9
let readableStream = fs.createReadStream('input');
let data1 = "";
// readableStream.setEncoding('UTF8');
readableStream.on('data', function (chunk) {
    data1 += chunk
});
readableStream.on('end', function () {
    console.log(data1);
});

let writeData = "Hey there, try at least 1vid everyday";
let writeableStream = fs.createWriteStream('output');
writeableStream.write(writeData);
writeableStream.end();
writeableStream.on('finish', function () {
    console.log("Write completed");
});

//10
let readableStream1 = fs.createReadStream('in');
let writeableStream1 = fs.createWriteStream('out');
readableStream1.pipe(writeableStream1);