// variables

// Must declare with let or const when first referenced
// camelCase, proper convention in JavaScript. Not needed, but HIGHLY suggested

let age = 37
let firstName = "Jeremy"
let monthsInYear = 12
// Variables can be used to define other variables
let ageInMonths = age * monthsInYear 

console.log(age) // Will print whatever age is (37)

console.log(ageInMonths) // Prints 444

numberOfLives = 3
// Update variables containing integers
numberOfLives += 1 
numberOfLives -= 1

// You can also declare a variable with var.
// NEVER use var, it screws up too much
// It is obvious if someone plagerised if var is in their code, not worth refactoring either.

// You can contatonate strings like this (Weird, complicated, forced spaces...)
console.log("Hello, my name is", firstName, "and I am", age, "years old")
// Or THIS! (Natural, cool)
// Make sure to use ``
console.log(`My name is ${firstName} and I am ${age} years old`)