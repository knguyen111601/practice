// JavaScript Hoisting is the process in which the interpreter moves all the declarations of functions, variables, or classes to the top of their scope, prior to the execution of the code

// ONLY TAKES THE DECLARATION AND NOT THE VALUE ASSIGNED TO IT
// EX. var d; will be hoisted, but if it is assigned something, that is ignored
var a = "First"
var b = "Second"
var c = "Third"
console.log(a + " " + b + " " + c + " " + d)
// The console.log will log d as undefined as the declaration is hoisted but not the value
var d = "Fourth"

////////////////////////////////////////////////////////////////////////////////////////////

// Here, f is declared below the console.log, but is assigned a value before its declaration is written
// JavaScript hoisting will bring it to the top of the scope
var e = "Fifth"
f = "Sixth"

console.log(e + " " + f)

var f 

////////////////////////////////////////////////////////////////////////////////////////////
// This will hoist the entire function to the top of the scope and run properly
// This console.log will log 10
console.log(example())

function example() {
    var a = 10
    return a
}

////////////////////////////////////////////////////////////////////////////////////////////

// Downside of hoisting 
// Take up space inside the browser and slow down the code
// Takes space for hoisting before anything can be loaded in the browser

// Methods to avoid
// Declare variables inside of functions that are used inside of the functions only
// Can assign variables to functions rather than having a named function that needs to be hoisted

////////////////////////////////////////////////////////////////////////////////////////////

// Named Function
function named() {
    console.log("Named function")
}

// Anonymous Function
var anonymous = function() {
    console.log("Anonymous")
}

// Better to use anonymous functions assigned to variables to avoid hoisting for the sake of browser speed

