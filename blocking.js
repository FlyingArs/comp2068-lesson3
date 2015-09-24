// blocking

// link to the fs core module so we can read the 2 text files
var fs = require('fs');

// read the fruit
var fruit = fs.readFileSync('fruit.txt', 'utf8');

// output the fruit list and a message
console.log(fruit);
console.log('Printing fruit');

// read the vegetables
var vegetables = fs.readFileSync('vegetables.txt', 'utf8');

// output the vegetable list and a message
console.log(vegetables);
console.log('Printing vegetables');