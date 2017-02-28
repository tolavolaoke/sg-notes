console.log('in main.js');
var o = {};
var s = '';
var b = true;
var n = 1;
var a = [];
console.log('Using "typeof" operator:');
console.log(typeof o);
console.log(typeof s);
console.log(typeof b);
console.log(typeof n);
console.log(typeof a);

console.log('Playing with different types:');// Seperator
var numberAsString = '5';
var number1 = 3;
var number2 = 7;
console.log(numberAsString + number1);
console.log(typeof (numberAsString + number1));
console.log(number1 + numberAsString);
console.log(typeof (number1 + numberAsString));
console.log(number1 + number2);
console.log('Harry' + 'Potter');
console.log('Harry' - 'Potter');
console.log(parseInt(numberAsString));
console.log(parseInt(numberAsString) + number1 + number2);
console.log(parseInt(3.1415927));
console.log(parseInt('3.1415927'));
console.log(parseInt(3.56));
console.log(parseFloat(3.1415927));
console.log(parseFloat('3.1415927'));
console.log(parseFloat(3.56));
console.log(parseFloat('blah'));

console.log('--- Control flow:'); // Seperator
var moneyInPocket = 20;

if (moneyInPocket > 10) {
  console.log('Another drink please!');
} else if (moneyInPocket > 5) {
  console.log('Make mine a half then');
} else {
  console.log('Time to go home');
}

var countryOfOrigin = 'Kenya';
var greeting = '';

switch(countryOfOrigin) {
  case 'France':
    greeting = 'Bonjour';
    break;
  case 'Spain':
    greeting = '¡Hola!';
    break;
  case 'Indonesia':
    greeting = 'Selamat sore';
    break;
  case 'Kenya':
    greeting = 'Jambo!';
    break;
  default:
    greeting = 'Well hello there';
    break;
}
console.log(greeting);

var dayOfWeek = 'Thursday';
// logical AND
if (dayOfWeek.toUpperCase() === 'THURSDAY' || dayOfWeek.toUpperCase() === 'FRIDAY') {
  console.log('Pub thisarvo!');
} else {
  console.log('Bummer :-(');
}


console.log('--- truthy/falsey:');
var truthyThings = [1, 0, 'something', '', -1, {}, [], null, undefined, NaN, 'false', '0'];

// For Loop
for(var i = 0 ; i < truthyThings.length ; i++) {
  if (truthyThings[i]) {
    console.log('  ', truthyThings[i], '--> truthy');
  } else {
    console.log('  ', truthyThings[i], '--> falsey');
  }
}

var yourName = prompt('What is your name?');

if (yourName) {
  alert('Nice one, ' + yourName);
} else {
  alert('Not sure what your name is!');
}

//while loop
console.log('--- Loops:');
var question = 'Now using a while () loop. What is yur name?';
yourName = prompt(question);
while (!yourName){
  alert('Not sure what your name is!');
}
alert ('Nice one, ' + yourName);

do { //do loop
  yourName = prompt ('Now using a do/while() loop. What is your name?')
} while (!yourName);
alert ('Nice one, ' + yourName);
