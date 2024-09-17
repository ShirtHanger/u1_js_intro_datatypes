// Comment out code with this 
/* Or this */
// Can be read only, for review, citing, and understanding 
// Is not seen by JavaScript when code is run


console.log(`Hello world!`) 
//Prints "Hello world!"

console.log(10 - 5) 
// Prints 5

console.log('10'- 5) // Still prints out 5 (???)
// JS can be weird

console.log('100' + 20) // Prints 10020, NOT 120
//Because 100 is a STRING, and the strings are contatinated

console.log(3 ** 2) // 3^2 prints 9
// Exponent operator **

console.log(10 % 9) // Prints 1
// Modulo operator % gives the remainder

// For advanced math, use  Math. class
// Math.pow, Math.sqrt, etc

console.log(Math.pow(3,2)) // 3^2, Prints 9
console.log(Math.sqrt(81)) // Square Root of 81, prints 9

Math.random()
// Returns something like 0.229375290430

Math.random()*10 // Returns a random number between 0-10

// We can get rid of decimals with Math.floor, Math.ceil, or Math.round

// round DOWN to the nearest integer
Math.floor(3.14) // 3
Math.floor(3.9999) // 3

// round UP to the nearest integer
Math.ceil(3.14) // 4
Math.ceil(3.9999) // 4

// Rounds to the nearest integer, up or down
Math.round(3.14) // 3, rounds down
Math.round(3.9999) // 4, rounds up

// Others

/* You can convert a string to an integer using the built-in parseInt()

Similarly, you can parse floating point numbers using the built-in parseFloat() function
 which uses base 10 always unlike its parseInt() cousin.

If you want to turn a number into a string you can use a helpful method called toString 

if you put anything that ISNT an integer, it returns NaN (Not a Number)

*/