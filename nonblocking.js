// non-blocking

var fs = require('fs');

function fruitCallback(err, fruitParam) {
    console.log(fruitParam);
}

// read and output fruit
var fruit = fs.readFile('fruit.txt', 'utf8', fruitCallback);

console.log('Printing fruit');

// read and output vegetables
var vegetables = fs.readFile('vegetables.txt', 'utf8', function (err, vegetables) {
    console.log(vegetables);
});

console.log('Printing vegetables');