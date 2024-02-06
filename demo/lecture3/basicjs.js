// // Declare variables
// let number = 5;
// const greeting = 'Hello, world!';

// // Display variables
// console.log(number);  // Output: 5
// console.log(greeting);  // Output: Hello, world!

//--------------------------------------------------------------------------------------------

// // Dynamic typing example
// let myVariable = 10;
// console.log(typeof myVariable);  // Output: 'number'

// myVariable = 'JavaScript is fun!';
// console.log(typeof myVariable);  // Output: 'string'

//--------------------------------------------------------------------------------------------

// var exampleVar = 'Hello';
// exampleVar = 'World'; // Reassignment is allowed
// console.log(exampleVar); // Output: 'World'

// // Example with let
// let exampleLet = 'Hello';
// exampleLet = 'World'; // Reassignment is allowed
// console.log(exampleLet); // Output: 'World'

// // Example with const
// const exampleConst = 'Hello';
// exampleConst = 'World'; // This will cause an error as reassignment is not allowed
// console.log(exampleConst);

//--------------------------------------------------------------------------------------------

// // Example showing scope difference between var and let

// // Using var
// if (true) {
//     var varVariable = 'I am var';
// }
// console.log(varVariable); // Output: 'I am var'

// // Using let
// if (true) {                                 // Parent scope
//     let letVariable = 'I am let';
//     if(true) {                                            // Nested scope
//         console.log(letVariable); // Output: 'I am let'
//     }                                                     // End of nested scope
// }                                           // End of parent scope
// // console.log(letVariable); // This will cause an error as letVariable is not accessible outside the blockx

