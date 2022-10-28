// What is an anonymous function? - a function without a name is an anonymous function
// What are first class functions? -> 
// What is the difference btw a function statement vs function expression - hoisting


// Function statement aka function Declaration
function a() {
    console.log("a called");
}

// Function Expression

var b = function () {
    console.log("b called");
} // initialize b with a function

// Anonymous Function(function without a name) - they are used when you use a function as values
/* function() {

} */

// Named function expression: 
var d = function randomName() {
    console.log("d called");
} 
randomName() // gives a Reference Error, randomNamenot created in the outer scope or global scope but instead is created in the local scope of d

// Difference between Parameters & Arguments ? 

var c = function(param1, param2) { // label identifier are known as parameters
    console.log("c called")
}
c(arg1, arg2); // arguments: values which you pass inside a function are know as arguments.


// First class Functions: the ability to use functions as values and can be passed as arguments to another functions and be returned out of another function. Functions are First Class Citizens: ABILITY TO BE USED LIKE VALUES:



// Arrow functions: introduced in ES6
/*  What is a call-back function is? 
First class citizen in JS. Take a function and pass it into another function(this is known as a call-back function).
Asynchronous world in a synchronous and single-threaded language.
*/

function x(y) {
    console.log("x");
}
x(function y() {console.log("y");})

setTimeout(function () {console.log("Hey")}, 5000); // takes a callback function
// JS is a synchronous and single-threaded language but you can have asynchronous behaviours in it. JS does not wait for none
// Main thread: call stack. Everything will be executed in the call stack or main thread, never block call stack or main thread.
